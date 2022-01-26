const {
  generateAccessToken,
  promisifyVerifyToken,
} = require("../utils/token.util");

const getToken = async (refreshToken) => {
  const result = await promisifyVerifyToken(refreshToken, "refresh");
  const { username } = result;
  const accessToken = generateAccessToken({ username });
  return { accessToken };
};

module.exports = { getToken };
