const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const createError = require("http-errors");

const userSchema = mongoose.Schema({
  name: {
    firstName: {
      type: String,
      trim: true,
      min: 3,
      max: 255,
    },
    middleName: {
      type: String,
      trim: true,
      min: 3,
      max: 255,
    },
    lastName: {
      type: String,
      trim: true,
      min: 3,
      max: 255,
    },
  },
  about: String,
  avatar: Buffer,
  dateOfBirth: Date,
  contact: {
    mobile: {
      type: String,
      trim: true,
      unique: true,
      min: 10,
      max: 10,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      max: 255,
    },
  },
});

module.exports = mongoose.model("candidate", userSchema);
