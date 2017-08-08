'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Beer related functions

const beerSchema = mongoose.Schema({
  name: {type: String, required: true},
  abv: {type: Number, required: true},
  style: String,
  description: {type: String, required: true},
  brewery: String,
  ibu: Number,
  reviews: [{
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date: { type: Date, default: Date.now },
    comment: String
  }]
});

beerSchema.virtual('review').get(function() {
  const reviewObj = this.reviews.sort((a, b) => {return b.date - a.date;})[0] || {};
  return reviewObj.review;
});

beerSchema.methods.apiRepr = function() {

  return {
    id: this._id,
    name: this.name,
    abv: this.abv,
    style: this.style,
    description: this.description,
    reviews: this.reviews,
    brewery: this.brewery,
    ibu:this.ibu
  };
};

// User related functions

const UserSchema = mongoose.Schema({
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Beer'}],
  username:{
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {type: String, default: ''},
  lastName: {type: String, default: ''}
});

UserSchema.methods.apiRepr = function() {
  return {
    _id: this._id,
    username: this.username || '',
    firstName: this.firstName || '',
    lastName: this.lastName || ''
  };
};

UserSchema.methods.validatePassword = function(password) {
  return bcrypt
    .compare(password, this.password)
    .then(isValid => isValid);
};

UserSchema.statics.hashPassword = function(password) {
  return bcrypt
    .hash(password, 10)
    .then(hash => hash);
};

const Beer = mongoose.model('Beer', beerSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {Beer, User};