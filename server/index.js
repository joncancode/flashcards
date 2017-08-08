//we need to add endpoints -- (/api/notes, /api/notes/:name, api/notes/:name/)
'use strict';

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const { PORT, DATABASE_URL } = require('./config');

const { Note } = require('./models');

const app = express();

app.use(bodyParser.json());

app.use(express.static('public'));


// API endpoints go here!
app.get('/api/notes', (req, res) => {
  console.log('get all is happening');
  Note
    .find()
    .then(Notes => {
      console.log(Notes);
      res.status(200).json(Notes);
    })
    .catch(err => {
      console.log('testing');
      res.status(500).json({ message: 'Internal error from GET' });
    });
});


//homepage -> press notes button -> get here:


app.get('/api/notes/:name', (req, res) => {
  console.log('get all is happening');
  Note
    .findById()
    .then(Notes => {
      console.log(Notes);
      res.status(200).json(Notes);
    })
    .catch(err => {
      console.log('testing');
      res.status(500).json({ message: 'Internal error from GET' });
    });
});

//click on word under the "name"->get to here:





app.get('/api/notes/:name/:words', (req, res) => {
  console.log('get all is happening');
  Note
    .findById()
    .then(Notes => {
      console.log(Notes);
      res.status(200).json(Notes);
    })
    .catch(err => {
      console.log('testing');
      res.status(500).json({ message: 'Internal error from GET' });
    });
});

//now we are looking at the word with the "definiton" / "example"

// to add for when we work on first screen app.post('/api/notes/', (req, res)


app.post('/api/notes/:name', (req, res) => { //this is the pose when we are clicking on the notes
  const requiredFields = ['word', 'definition'];
  for(let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if(!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }

  Note
    .create({
      word: req.body.word,
      definition: req.body.definition
    })
    .then(
      note => res.status(201).json(note.apiRepr()))
    .catch(err => {
      console.log(err);
      res.status(500).json({message: 'Internal server error'});
    });

  console.log('get all is happening');
  Note
    .find()
    .then(Notes => {
      console.log(Notes);
      res.status(200).json(Notes);
    })
    .catch(err => {
      console.log('testing');
      res.status(500).json({ message: 'Internal error from GET' });
    });
});
// app.post('/beers', (req, res) => {
//   const requiredFields = ['name', 'style', 'abv', 'description', 'reviews', 'brewery', 'ibu', ];
//   for (let i=0; i<requiredFields.length; i++) {
//     const field = requiredFields[i];
//     if (!(field in req.body)) {
//       const message = `Missing \`${field}\` in request body`;
//       console.error(message);
//       return res.status(400).send(message);
//     }
//   }

//   Beer
//     .create({
//       name: req.body.name,
//       abv: req.body.abv,
//       style: req.body.style,
//       reviews: req.body.reviews,
//       brewery: req.body.brewery,
//       ibu: req.body.ibu,
//       description: req.body.description})
//     .then(
//       beer => res.status(201).json(beer.apiRepr()))
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({message: 'Internal server error'});
//     });
// });




// app.post('/api/notes/:name/:words', (req, res) => { // this is the post for when we click on the card and we are 
// //   console.log('get all is happening');
// //   Note
// //     .find()
// //     .then(Notes => {
// //       console.log(Notes);
// //       res.status(200).json(Notes);
// //     })
// //     .catch(err => {
// //       console.log('testing');
// //       res.status(500).json({ message: 'Internal error from GET' });
// //     });
// });

// app.put('/api/notes/:name/:words', (req, res) => { });

// app.put('/posts/:id', (req, res) => {
//   if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
//     res.status(400).json({
//       error: 'Request path id and request body id values must match'
//     });
//   }

//   const updated = {};
//   const updateableFields = ['words', 'definition'];
//   updateableFields.forEach(field => {
//     if (field in req.body) {
//       updated[field] = req.body[field];
//     }
//   });

//   BlogPost
//     .findByIdAndUpdate(req.params.id, { $set: updated }, { new: true })
//     .exec()
//     .then(updatedPost => res.status(201).json(updatedPost.apiRepr()))
//     .catch(err => res.status(500).json({ message: 'Something went wrong' }));
// });

// app.delete('/api/notes/:name/', (req, res) => {
//   Note
//     .findByIdAndRemove(req.params.id)
//     .then(result => {
//       console.log(result);
//       res.status(204).send({ message: 'Deleted' });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).send({ message: 'Error from Delete' });
//     });
// });

// app.delete('/api/notes/:name/:words', (req, res) => {
//   Note
//     .findByIdAndRemove(req.params.id)
//     .then(result => {
//       console.log(result);
//       res.status(204).send({ message: 'Deleted' });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).send({ message: 'Error from Delete' });
//     });
// });



// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));


// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
  const index = path.resolve(__dirname, '../client/build', 'index.html');
  res.sendFile(index);
});

let server;
function runServer(dbUrl, port = PORT) {
  console.log(port);
  return new Promise((resolve, reject) => {
    mongoose.connect(dbUrl, err => {
      if (err) {
        return reject(err);
      }


      else{
        console.log(`Your app is connected to db: ${DATABASE_URL}`);

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
  runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };

//ask a refresher on setting up all of our endpoints (3) -- ok

//how to connect server to react-redux (1) -- Use the API to connect to store 

//automatically calling from the {connect} import 


//making sure the database is up and running with mongo (2) -- 

//make sure mongo is running in another terminal / get mLab connected 


//Tuesday accomplishments

//Frontend --

//we want to see that we are changing the state 

//Backend --

//Endpoints are working on POSTMAN