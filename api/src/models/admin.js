const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const createError = require("http-errors");

const adminSchema = mongoose.Schema({
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
});

// Hashing password before storing.
adminSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      const hashedPass = await bcrypt.hash(this.password, 10);
      this.password = hashedPass;
      next();
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// Custom method for comparing password.
adminSchema.method.comparePass = async function (password) {
  if (!password) throw createError.BadRequest("Password is missing");
  try {
    const result = await bcrypt.compare(password, this.password);
    return result;
  } catch (error) {
    console.error(`Error while comparing Password: ${error.message}`);
  }
};

module.exports = mongoose.model("admin", adminSchema);
