const asyncHandler = require("express-async-handler");
const createError = require("http-errors");

const { verifyToken } = require("../helpers/jwt");

const authenticate = (authType) =>
  asyncHandler(async (req, _, next) => {
    try {
      const authorization = req.headers.authorization;
      const token = authorization.split(" ")[1];
      if (!token) return next(createError.Unauthorized());
      const { username, type } = await verifyToken(token);
      if (!authType.includes(type)) next(createError.Unauthorized());
      req.user = { username, type };
      next();
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

module.exports = authenticate;
