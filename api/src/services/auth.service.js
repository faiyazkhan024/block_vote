const bcrypt = require("bcrypt");
const createError = require("http-errors");

const { generateToken, verifyToken } = require("../helpers/jwt.helper");
const { getPrivateData } = require("../helpers/local.helper");

const login = async (loginCredential) => {
  const { username, password, type } = loginCredential;
  const data = getPrivateData(type);
  const { id, password: encryptedPass } = data.find(
    (user) => user.username === username
  );
  bcrypt.compare(password, encryptedPass, (err, _) => {
    if (err) throw createError.BadRequest("Invalid Username or Password");
  });
  const accessToken = await generateToken(id);
  const refreshToken = await generateToken(id, "refresh");
  return { accessToken, refreshToken };
};

const getToken = async (refreshToken) => {
  const { id } = await verifyToken(refreshToken, "refresh");
  const accessToken = await generateToken(id);
  return { accessToken };
};

const logout = async (refreshToken) => {
  const result = await verifyToken(refreshToken, "refresh");
  const { id } = result;
  return { id, message: "Logged out" };
};

module.exports = { login, getToken, logout };
