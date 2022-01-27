const joi = require("joi");

const adminSchema = joi.object({
  username: joi.string().alphanum().lowercase().min(5).max(30).required(),
  password: joi
    .string()
    .min(8)
    .pattern(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*._-])[a-zA-Z0-9!@#$%^&*._-]/
    )
    .required(),
});

module.exports = adminSchema;
