const Joi = require("joi");

function validateDeliveries(deliveries) {
  const schema = Joi.object({
    order_id: Joi.string().number().required(),
    delivery_driver_id: Joi.number().required(),
  });

  return schema.validate(deliveries);
}

module.exports = validateDeliveries;
