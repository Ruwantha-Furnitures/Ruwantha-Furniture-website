const Joi = require("joi");

function validateProduct(product) {
  const schema = Joi.object({
    name: Joi.string().required(),
    type_id: Joi.number().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    color: Joi.string().required(),
    width: Joi.number().required(),
    height: Joi.number().required(),
    discount: Joi.number().required(),
    img_location: Joi.string().required(),
  });

  return schema.validate(product);
}

module.exports = validateProduct;
