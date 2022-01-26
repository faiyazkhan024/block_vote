const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/token.util");

const login = (user) => {
  const { username } = user;
  const accessToken = generateAccessToken({ username });
  const refreshToken = generateRefreshToken({ username });
  return { accessToken, refreshToken };
};

module.exports = { login };
