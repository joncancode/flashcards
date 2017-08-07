//need to connect server.js to this 
//needt to export NOTES


const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  word: {type: String, required: false},
  definition: {type: String, required: false},
  example: {type: String, required: false},
});

noteSchema.methods.apiRepr = function() {
  return {
    _id: this._id,
    word: this.word,
    definition: this.defintion,
    example: this.example
  };
};


const Note = mongoose.model('Note', noteSchema);

module.exports = {Note};