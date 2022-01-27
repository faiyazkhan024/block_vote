const { generateToken, verifyToken } = require("../helpers/jwt.helper");

const getToken = async (refreshToken) => {
  const result = await verifyToken(refreshToken, "refresh");
  const { id, username } = result;
  const accessToken = await generateToken({ id, username });
  return { accessToken };
};

module.exports = { getToken };
