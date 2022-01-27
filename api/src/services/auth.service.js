const { v4: uuid } = require("uuid");

const { generateToken, verifyToken } = require("../helpers/jwt.helper");

const login = async (loginCredential) => {
  const id = uuid();
  const { username, password, type } = loginCredential;
  const accessToken = await generateToken({ id, username, type });
  const refreshToken = await generateToken({ id, username, type }, "refresh");
  return { accessToken, refreshToken };
};

const getToken = async (refreshToken) => {
  const result = await verifyToken(refreshToken, "refresh");
  const { id, username, type } = result;
  const accessToken = await generateToken({ id, username, type });
  return { accessToken };
};

const logout = async (refreshToken) => {
  const result = await verifyToken(refreshToken);
};

module.exports = { login, getToken };
