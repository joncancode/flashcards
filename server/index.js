//we need to add endpoints -- (/api/notes, /api/notes/:name, api/notes/:name/)
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
const { PORT, DATABASE_URL } = require('./config');
const { Note } = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
//   console.log('get all is happening');
//   Note
//     .find()
//     .then(Notes => {
//       console.log(Notes);
//       res.status(200).json(Notes);
//     })
//     .catch(err => {
//       console.log('testing');
//       res.status(500).json({ message: 'Internal error from GET' });
//     });
});




app.post('/api/notes/:name/:words', (req, res) => { // this is the post for when we click on the card and we are 
//   console.log('get all is happening');
//   Note
//     .find()
//     .then(Notes => {
//       console.log(Notes);
//       res.status(200).json(Notes);
//     })
//     .catch(err => {
//       console.log('testing');
//       res.status(500).json({ message: 'Internal error from GET' });
//     });
});

app.put('/api/notes/:name/:words', (req, res) => { }


app.delete('/api/notes/:name/, authenticate, (req, res) => {
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

app.delete('/api/notes/:name/:words', authenticate, (req, res) => {
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
function runServer(dbUrl) {
    return new Promise((resolve, reject) => {
          mongoose.connect(dbUrl, err => {
      if (err) {
        return reject(err);
      }
        server = app.listen(PORT, () => {
          console.log(`Your app is listening on port ${PORT}`);
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

//ask a refresher on setting up all of our endpoints
//how to connect server to react-redux
//making sure the database is up and running with mongo 


//Tuesday accomplishments

//Frontend --

//we want to see that we are changing the state 

//Backend --

//Endpoints are working on POSTMAN