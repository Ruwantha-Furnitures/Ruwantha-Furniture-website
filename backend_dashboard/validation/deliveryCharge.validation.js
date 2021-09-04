const Joi = require("joi");

function validateDeliveryCharge(deliveryCharge) {
  const schema = Joi.object({
    area: Joi.string().required(),
    amount: Joi.number().required(),
  });

  return schema.validate(deliveryCharge);
}

module.exports = validateDeliveryCharge;
