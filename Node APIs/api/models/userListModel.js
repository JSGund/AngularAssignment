'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  Name: {
    type: String,
    required: 'Name of the user.'
  },
  Email: {
    type: String,
    required: 'Email of the user.'
  },
  Role: {
    type: String,
    default: "Admin"
  },
  Status: {
    type: String,
    default: "Inactive"
  },
  MobileNumber: {
    type: Number
  }
});

module.exports = mongoose.model('Users', UserSchema);