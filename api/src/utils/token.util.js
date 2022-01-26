const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "3h",
  });
};

const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET);
};

const verifyToken = (token, type, callback) => {
  let secret;
  if (type === "access") secret = process.env.ACCESS_TOKEN_SECRET;
  if (type === "refresh") secret = process.env.REFRESH_TOKEN_SECRET;
  return jwt.verify(token, secret, callback);
};

const promisifyVerifyToken = (token, type) => {
  let secret;
  const verify = promisify(jwt.verify);
  if (type === "access") secret = process.env.ACCESS_TOKEN_SECRET;
  if (type === "refresh") secret = process.env.REFRESH_TOKEN_SECRET;
  return verify(token, secret);
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
  promisifyVerifyToken,
};
