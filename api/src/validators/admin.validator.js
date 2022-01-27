const joi = require("joi");
const createError = require("http-errors");

const adminSchema = joi.object({
  username: joi.string().alphanum().lowercase().min(5).max(30).required(),
  password: joi
    .string()
    .error(() => createError.BadRequest("Password must be of type string."))
    .min(8)
    .error(() =>
      createError.BadRequest("Password length must be at least 8 characters.")
    )
    .pattern(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*._-])[a-zA-Z0-9!@#$%^&*._-]/
    )
    .error(() =>
      createError.BadRequest(
        "Password must must contain at least of each a-z, A-Z, 0-9, !@#$%^&*._-"
      )
    )
    .required(),
});

module.exports = adminSchema;
