const createError = require("http-errors");

const loginCredentialValidator = require("../validators/loginCredential.validator");
const { login, getToken, logout } = require("../services/auth.service");

const loginController = async (req, res, next) => {
  try {
    const loginCredential = req.body;
    await loginCredentialValidator(loginCredential);
    const result = await login(loginCredential);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const tokenController = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) return next(createError.Unauthorized());
    const result = await getToken(refreshToken);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const logoutController = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) return next(createError.Unauthorized());
    await logout(refreshToken);
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    next(error);
  }
};

module.exports = { loginController, tokenController, logoutController };
