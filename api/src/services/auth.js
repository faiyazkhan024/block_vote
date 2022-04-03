const createError = require("http-errors");

const { generateToken, verifyToken } = require("../helpers/jwt");
const Admin = require("../models/admin");
const Voter = require("../models/voter");

const login = async (loginCredential, type) => {
  const { username, password } = loginCredential;
  const user =
    type === "admin"
      ? await Admin.findOne({ username })
      : await Voter.findOne({ username });
  if (!user) throw new createError.BadRequest("Invalid Username/Password");
  const isMatch = await user.comparePass(password);
  if (!isMatch) throw new createError.BadRequest("Invalid Username/Password");
  const accessToken = await generateToken({ username, type });
  const refreshToken = await generateToken({ username, type }, "refresh");
  return { accessToken, refreshToken };
};

const token = async (refreshToken, type) => {
  const { username } = await verifyToken(refreshToken, "refresh");
  const accessToken = await generateToken({ username, type });
  return { accessToken };
};

const logout = async (refreshToken, type) => {
  const { username } = await verifyToken(refreshToken, "refresh");
  return { username, type, message: "Logged out" };
};

module.exports = { login, token, logout };
