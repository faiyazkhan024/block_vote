const createError = require("http-errors");

const { login } = require("../services/admin.service");
const adminSchema = require("../validators/admin.validator");

const loginController = async (req, res, next) => {
  try {
    const user = req.body;
    await adminSchema.validateAsync(req.body);
    const result = login(user);
    res.status(200).json(result);
  } catch (error) {
    if (error.isJoi === true)
      return next(createError.BadRequest("Invalid Username/Password"));
    next(error);
  }
};

module.exports = { loginController };
