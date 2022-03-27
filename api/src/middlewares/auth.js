const createError = require("http-errors");

const { verifyToken } = require("../helpers/jwt");

const authenticate = async (req, _, next) => {
  try {
    const authorization = req.headers.authorization;
    const token = authorization.split(" ")[1];
    if (!token) return next(createError.Unauthorized());
    const result = verifyToken(token);
    req.user = result;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;
