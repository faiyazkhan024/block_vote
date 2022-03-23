const { generateToken, verifyToken } = require("../helpers/jwt.helper");

const login = async (loginCredential) => {
  const { username, type } = loginCredential;
  const accessToken = await generateToken({ username, type });
  const refreshToken = await generateToken({ username, type }, "refresh");
  return { accessToken, refreshToken };
};

const getToken = async (refreshToken) => {
  const { username, type } = await verifyToken(refreshToken, "refresh");
  const accessToken = await generateToken({ username, type });
  return { accessToken };
};

const logout = async (refreshToken) => {
  const { username, type } = await verifyToken(refreshToken, "refresh");
  return { username, type, message: "Logged out" };
};

module.exports = { login, getToken, logout };
