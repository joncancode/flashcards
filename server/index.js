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

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  //res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'GET', 'DELETE');
  next();
});

// API endpoints go here!
app.get('/api/notes', (req, res) => {
//  console.log('get all is happening');
  Note
    .find()
    .then(Notes => {
     // console.log(Notes);
      res.status(200).json(Notes); //Note is equal to the mongoose model being called in
    })
    .catch(err => {
     // console.log('testing');
      res.status(500).json({ message: 'Internal error from GET' });
    });
});


//homepage -> press notes button -> get here:


app.get('/api/notes/:id', (req, res) => {
  //console.log('get all is happening');
  Note
    .findById()
    .then(Notes => {
     // console.log(Notes);
      res.status(200).json(Notes);
    })
    .catch(err => {
     // console.log('testing');
      res.status(500).json({ message: 'Internal error from GET' });
    });
});

//click on word under the "name"->get to here:





// app.get('/api/notes/:word/:words', (req, res) => {
//   console.log('get all is happening');
//   Note
//     .findById()
//     .then(Notes => {
//       console.log(Notes);
//       res.status(200).json(Notes);
//     })
//     .catch(err => {
//       console.log('testing');
//       res.status(500).json({ message: 'Internal error from GET' });
//     });
// });

//now we are looking at the word with the "definiton" / "example"

// to add for when we work on first screen app.post('/api/notes/', (req, res)


app.post('/api/notes', (req, res) => { //this is the pose when we are clicking on the notes
  console.log(req.body, 'requesting body');
  Note
    .create({
      word: req.body.newNote.word,
      definition: req.body.newNote.definition
    })
    .then(
      note => {
        res.status(201).json(note);
      })
    .catch(err => {
      console.log(err);
      res.status(500).json({message: 'Internal server error'});
    });

  // console.log('get all is happening');
  // Note
  //   .find()
  //   .then(Notes => {
  //     console.log(Notes);
  //     res.status(200).json(Notes);
  //   })
  //   .catch(err => {
  //     console.log('testing');
  //     res.status(500).json({ message: 'Internal error from GET' });
  //   });
});

app.put('/api/notes/:id', (req, res) => {
  if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    res.status(400).json({
      error: `${req.body} Request path id and request body id values must match`
    });
  }

  const updated = {};
  const updateableFields = ['word', 'definition'];
  updateableFields.forEach(field => {
    if (field in req.body) {
      updated[field] = req.body[field];
    }
  });


  Note
    .findByIdAndUpdate(req.params.id, { $set: updated }, { new: true })
    .exec()
    .then(updatedWord => res.status(201).json(updatedWord.apiRepr()))
    .catch(err => res.status(500).json({ message: 'Something went wrong' }));
});

app.delete('/api/notes/:id/', (req, res) => {
  Note
    .findByIdAndRemove(req.params.id)
    .then(result => {
      console.log(result);
      res.status(204).send({ message: 'Deleted' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ message: 'Error from Delete' });
    });
});

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

 



//Tuesday accomplishments

//Frontend -- 

//we want to see that we are changing the state 

//Backend --

