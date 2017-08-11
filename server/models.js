//need to connect server.js to this 
//needt to export NOTES


const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  word: {type: String, required: true},
  definition: {type: String, required: true},
  category: {type: String, required: true}
});

noteSchema.methods.apiRepr = function() {
  return {
    _id: this._id,
    word: this.word,
    definition: this.defintion,
    category: this.category
  };
}; //add a new property {category: biology} -- / this is for the (server) when making the ajax request: GET ENDPOINT -- .find({category: req.body.category})

// const UserSchema = mongoose.Schema({
//   reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Beer'}],
//   username:{
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   firstName: {type: String, default: ''},
//   lastName: {type: String, default: ''}
// });

// UserSchema.methods.apiRepr = function() {
//   return {
//     _id: this._id,
//     username: this.username || '',
//     firstName: this.firstName || '',
//     lastName: this.lastName || ''
//   };
// };

// UserSchema.methods.validatePassword = function(password) {
//   return bcrypt
//     .compare(password, this.password)
//     .then(isValid => isValid);
// };

// UserSchema.statics.hashPassword = function(password) {
//   return bcrypt
//     .hash(password, 10)
//     .then(hash => hash);
// };



// const User = mongoose.model('User', UserSchema);
const Note = mongoose.model('Note', noteSchema);

module.exports = {Note};