const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const voterSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true,
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
  dateOfBirth: Date,
  avatar: Buffer,
  mobile: {
    type: String,
    trim: true,
    min: 10,
    max: 10,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    max: 255,
  },
});

// Hashing password before storing.
voterSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      const hashedPass = await bcrypt.hash(this.password, 10);
      this.password = hashedPass;
      next();
    }
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("voter", voterSchema);
