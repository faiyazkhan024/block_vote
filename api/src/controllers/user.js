const asyncHandler = require("express-async-handler");
const createError = require("http-errors");

const loginCredentialValidator = require("../validators/loginCredential");
const { login, getToken, logout } = require("../services/user");

const loginController = asyncHandler(async (req, res, next) => {
  try {
    const loginCredential = req.body;
    await loginCredentialValidator(loginCredential);
    const result = await login(loginCredential);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

const tokenController = asyncHandler(async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) return next(createError.Unauthorized());
    const result = await getToken(refreshToken);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

const logoutController = asyncHandler(async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) return next(createError.Unauthorized());
    const result = await logout(refreshToken);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = { loginController, tokenController, logoutController };
