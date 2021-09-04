const Joi = require("joi");

function validateOrder(order) {
  const schema = Joi.object({
    total_product_amount: Joi.number().required(),
    customer_id: Joi.number().required(),
    payment_method: Joi.string().required(),
  });

  return schema.validate(order);
}

module.exports = validateOrder;
