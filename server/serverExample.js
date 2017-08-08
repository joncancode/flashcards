'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const {BasicStrategy} = require('passport-http');
const morgan = require('morgan');

mongoose.Promise = global.Promise;

const {PORT, DATABASE_URL} = require('./config');

const {Beer, User} = require('./models');

const app = express();

app.use(morgan('common'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// User and authorization related functions
const strategy = new BasicStrategy(function(username, password, callback) {
  let user;
  User
    .findOne({username: username})
    .exec()
    .then(_user => {
      user = _user;
      if (!user) {
        return callback(null, false, {message: 'Incorrect username'});
      }
      return user.validatePassword(password);
    })
    .then(isValid => {
      if (!isValid) {
        return callback(null, false, {message: 'Incorrect password'});
      }
      else {
        return callback(null, user);
      }
    });
});

passport.use(strategy);

// This endpoint should be removed at a later date as it reveals user data
// It can currently be used to visualize what users have been created in Postman

// GET request to /users
app.get('/users', (req, res) => {
  User
    .find()
    .limit(10)
    .exec()
    .then(users => {
      res.json({
        users: users.map(
          (user) => user.apiRepr())
      });
    })
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
      });
});

// POST request to /users

app.post('/users', (req, res) => {
  const requiredFields = ['username', 'password', 'firstName', 'lastName'];
  const missingIndex = requiredFields.findIndex(field => !req.body[field]);
  if (missingIndex !== -1) {
    return res.status(400).json({
      message: `Missing field: ${requiredFields[missingIndex]}`
    });
  }

  let {username, password, firstName, lastName} = req.body;
  username = username.trim();
  password = password.trim();
  return User
    .find({username})
    .count()
    .exec()
    .then(count => {
      if (count > 0) {
        return res.status(422).json({message: 'username already taken'});
      }
      return User.hashPassword(password);
    })
    .then(hash => {
      return User
        .create({
          username,
          password: hash,
          firstName,
          lastName
        });
    })
    .then(user => {
      return res.status(201).json(user.apiRepr());
    })
    .catch(err => {
      res.status(500).json({message: 'Internal server error'});
    });
});

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

// GET requests to /beers
app.get('/beers', (req, res) => {
  Beer
    .find()
    .limit(10)
    .populate('reviews.author')
    .exec()
    .then(beers => {
      res.json({
        beers: beers.map(
          (beer) => beer.apiRepr())
      });
    })
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
      });
});

// can also request by ID
app.get('/beers/:id', (req, res) => {
  Beer
    // this is a convenience method Mongoose provides for searching
    // by the object _id property
    .findById(req.params.id)
    .exec()
    .then(beer =>res.json(beer.apiRepr()))
    .catch(err => {
      console.error(err);
      res.status(500).json({message: 'Internal server error'});
    });
});

app.post('/beers', (req, res) => {
  const requiredFields = ['name', 'style', 'abv', 'description', 'reviews', 'brewery', 'ibu', ];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }

  Beer
    .create({
      name: req.body.name,
      abv: req.body.abv,
      style: req.body.style,
      reviews: req.body.reviews,
      brewery: req.body.brewery,
      ibu: req.body.ibu,
      description: req.body.description})
    .then(
      beer => res.status(201).json(beer.apiRepr()))
    .catch(err => {
      console.error(err);
      res.status(500).json({message: 'Internal server error'});
    });
});

app.put('/beers/:id', 
  passport.authenticate('basic', {session: false}),
  (req, res) => {

    // console.log('the req'+ req.headers.authorization);
    // console.log('the req user'+ req.user);

    // req.user contains the key value pair of _id : 12345 ; where the number is the ObjectId
    // This id can be used to query for the appropriate review to be updated by a logged in user

  // ensure that the id in the request path and the one in request body match
    if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
      const message = (
        `Request path id (${req.params.id}) and request body id ` +
      `(${req.body.id}) must match`);
      console.error(message);
      res.status(400).json({message: message});
    }

    Beer
      .findByIdAndUpdate(req.params.id, {$push: {reviews: req.body.reviews[0]}}, {new: true})
      .exec()
      .then(updatedBeer => {
        res.status(204).json(updatedBeer.apiRepr());
      })
    
      .catch(err => res.status(500).json({message: 'Internal server error'}));

  });

app.delete('/beers/:id', (req, res) => {
  Beer
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(beer => res.status(204).end())
    .catch(err => res.status(500).json({message: 'Internal server error'}));
});

app.use('*', function(req, res) {
  res.status(404).json({message: 'Not Found'});
});

let server;

function runServer(databaseUrl=DATABASE_URL, port=PORT) {

  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
}

module.exports = {app, runServer, closeServer};

/