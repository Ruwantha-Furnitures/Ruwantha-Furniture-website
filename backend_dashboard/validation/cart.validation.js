const Joi = require("joi");

function validateCart(cart) {
  const schema = Joi.object({
    customer_id: Joi.number().required(),
    product_id: Joi.number().required(),
    quantity: Joi.number().required(),
  });

  return schema.validate(cart);
}

module.exports = validateCart;
