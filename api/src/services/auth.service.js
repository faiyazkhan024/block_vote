const { generateToken, verifyToken } = require("../helpers/jwt.helper");

const login = async (loginCredential) => {
  const { username } = loginCredential;
  const accessToken = await generateToken(username);
  const refreshToken = await generateToken(username, "refresh");
  return { accessToken, refreshToken };
};

const getToken = async (refreshToken) => {
  const { username } = await verifyToken(refreshToken, "refresh");
  const accessToken = await generateToken(username);
  return { accessToken };
};

const logout = async (refreshToken) => {
  const { username } = await verifyToken(refreshToken, "refresh");
  return { username, message: "Logged out" };
};

module.exports = { login, getToken, logout };
