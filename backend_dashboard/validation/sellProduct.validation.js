const Joi = require("joi");

function validateSellProduct(sellProduct) {
  const schema = Joi.object({
    product_id: Joi.number().required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
    discount: Joi.number().required(),
    order_id: Joi.number().required(),
  });

  return schema.validate(sellProduct);
}

module.exports = validateSellProduct;
