const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const generateToken = (payload, refresh) => {
  const secret = refresh
    ? process.env.REFRESH_TOKEN_SECRET
    : process.env.ACCESS_TOKEN_SECRET;
  const options = {
    expiresIn: refresh ? "30d" : "3h",
    issuer: "voteblock.in",
  };
  const { id, type } = payload;
  return new Promise((resolve, reject) => {
    jwt.sign({ id, type }, secret, options, (err, token) => {
      if (err) return reject(createError.InternalServerError());
      resolve(token);
    });
  });
};

const verifyToken = (token, refresh) => {
  const secret = refresh
    ? process.env.REFRESH_TOKEN_SECRET
    : process.env.ACCESS_TOKEN_SECRET;
  const { id, type } = token;
  return new Promise((resolve, reject) => {
    jwt.verify({ id, type }, secret, (err, result) => {
      if (err) return reject(createError.UnprocessableEntity());
      resolve(result);
    });
  });
};

module.exports = {
  generateToken,
  verifyToken,
};
