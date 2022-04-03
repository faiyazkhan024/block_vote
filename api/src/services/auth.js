const { generateToken, verifyToken } = require("../helpers/jwt");

const login = async (loginCredential, type) => {
  const { username } = loginCredential;
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
