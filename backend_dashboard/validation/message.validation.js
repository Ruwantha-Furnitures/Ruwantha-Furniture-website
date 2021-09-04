const Joi = require("joi");

function validateMessage(message) {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    contact_number: Joi.number().required(),
    email: Joi.string().email().required(),
    details: Joi.string().required(),
  });

  return schema.validate(message);
}

module.exports = validateMessage;
