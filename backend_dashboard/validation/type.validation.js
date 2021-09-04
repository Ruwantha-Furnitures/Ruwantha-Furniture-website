const Joi = require("joi");

function validateType(type) {
  const schema = Joi.object({
    name: Joi.string().required(),
    category_id: Joi.number().required(),
  });

  return schema.validate(type);
}

module.exports = validateType;
