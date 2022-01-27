const { v4: uuid } = require("uuid");

const { generateToken } = require("../helpers/jwt.helper");

const login = async (user) => {
  const id = uuid();
  const { username } = user;
  const accessToken = await generateToken({ id, username });
  const refreshToken = await generateToken({ id, username }, "refresh");
  return { accessToken, refreshToken };
};

module.exports = { login };
