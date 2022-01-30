const joi = require("joi");
const createError = require("http-errors");

const loginCredentialSchema = joi.object({
  username: joi
    .string()
    .alphanum()
    .lowercase()
    .min(5)
    .max(30)
    .required()
    .error(() => createError.BadRequest("Invalid Username/Password.")),
  password: joi
    .string()
    .min(8)
    .pattern(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*._-])[a-zA-Z0-9!@#$%^&*._-]+$/
    )
    .required()
    .error(() => createError.BadRequest("Invalid Username/Password.")),
  type: joi
    .string()
    .lowercase()
    .required()
    .error(() => createError.BadRequest("Invalid type")),
});

const loginCredentialValidator = loginCredentialSchema.validateAsync.bind(
  loginCredentialSchema
);

module.exports = loginCredentialValidator;
