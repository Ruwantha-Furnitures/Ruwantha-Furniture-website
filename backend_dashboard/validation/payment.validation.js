const Joi = require("joi");

function validatePayment(payment) {
  const schema = Joi.object({
    order_id: Joi.number().required(),
    total_amounts: Joi.number().required(),
  });

  return schema.validate(payment);
}

module.exports = validatePayment;
