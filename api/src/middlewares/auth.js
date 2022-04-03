const createError = require("http-errors");

const { verifyToken } = require("../helpers/jwt");

const authenticate = (authType) => async (req, _, next) => {
  try {
    const authorization = req.headers.authorization;
    const token = authorization.split(" ")[1];
    if (!token) return next(createError.Unauthorized());
    const { username, type } = verifyToken(token);
    if (authType.includes(type)) next(createError.Unauthorized());
    req.user = { username, type };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;
