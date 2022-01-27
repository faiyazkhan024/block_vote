const createError = require("http-errors");

const { login } = require("../services/admin.service");
const adminSchema = require("../validators/admin.validator");

const loginController = async (req, res, next) => {
  try {
    const user = req.body;
    await adminSchema.validateAsync(req.body);
    const result = await login(user);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { loginController };
