const { generateToken, verifyToken } = require("../helpers/jwt.helper");

const login = async (loginCredential) => {
  const accessToken = await generateToken(loginCredential);
  const refreshToken = await generateToken(loginCredential, "refresh");
  return { accessToken, refreshToken };
};

const getToken = async (refreshToken) => {
  const result = await verifyToken(refreshToken, "refresh");
  const accessToken = await generateToken(result);
  return { accessToken };
};

const logout = async (refreshToken) => {
  const result = await verifyToken(refreshToken, "refresh");
  const { id } = result;
  return { id, message: "Logged out" };
};

module.exports = { login, getToken, logout };
