const Joi = require("joi");

function validateResetToken(resetToken) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    token: Joi.string().required(),
  });

  return schema.validate(resetToken);
}

module.exports = validateResetToken;
