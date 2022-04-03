const asyncHandler = require("express-async-handler");
const createError = require("http-errors");

const { login, token, logout } = require("../services/auth");

const loginUser = asyncHandler(async (req, res, next) => {
  try {
    const loginCredential = req.body;
    const { type } = req.params;
    const result = await login(loginCredential, type);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

const getToken = asyncHandler(async (req, res, next) => {
  try {
    const refresh = req.headers.refresh;
    const refreshToken = refresh.split(" ")[1];
    const { type } = req.params;
    if (!refreshToken) return next(createError.Unauthorized());
    const result = await token(refreshToken, type);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

const logoutUser = asyncHandler(async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    const token = authorization.split(" ")[1];
    const { type } = req.params;
    if (!refreshToken) return next(createError.Unauthorized(""));
    const result = await logout(token, type);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = { loginUser, getToken, logoutUser };
