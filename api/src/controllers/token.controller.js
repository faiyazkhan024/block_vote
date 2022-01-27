const createError = require("http-errors");

const { getToken } = require("../services/token.service");

const tokenController = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken)
      return next(createError.Unauthorized("Refresh token is required"));
    const result = await getToken(refreshToken);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { tokenController };
