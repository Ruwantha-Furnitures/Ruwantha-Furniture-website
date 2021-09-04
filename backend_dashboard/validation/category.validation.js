const Joi = require("joi");

function validateCategory(category) {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(category);
}

module.exports = validateCategory;
