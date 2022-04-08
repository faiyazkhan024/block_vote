const createError = require("http-errors");
const bcrypt = require("bcrypt");

const { generateToken, verifyToken } = require("../helpers/jwt");
const Admin = require("../models/admin");
const Voter = require("../models/voter");

const login = async (loginCredential, type) => {
  const { username, password } = loginCredential;
  const user =
    type === "admin"
      ? await Admin.findOne({ username })
      : await Voter.findOne({ username });
  if (!user) throw createError.BadRequest("Invalid Username/Password");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw createError.BadRequest("Invalid Username/Password");
  const accessToken = await generateToken({ username, type });
  const refreshToken = await generateToken({ username, type }, "refresh");
  return { user, accessToken, refreshToken };
};

const token = async (refreshToken, type) => {
  const { username } = await verifyToken(refreshToken, "refresh");
  const accessToken = await generateToken({ username, type });
  return { accessToken };
};

module.exports = { login, token };
