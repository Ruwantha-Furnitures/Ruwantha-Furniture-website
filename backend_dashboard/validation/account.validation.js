const Joi = require("joi");

function validateAccount(account) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    user_level: Joi.number().required(),
  });

  return schema.validate(account);
}

module.exports = validateAccount;
