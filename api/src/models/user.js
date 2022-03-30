const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    min: 3,
    max: 255,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    min: 6,
    max: 255,
  },
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
  profileImg: String,
  about: String,
  type: {
    type: String,
    trim: true,
    require: true,
  },
});

module.exports = mongoose.model("user", userSchema);
