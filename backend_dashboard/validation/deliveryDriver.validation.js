const Joi = require("joi");

function validateDeliveryDriver(deliveryDriver) {
  const schema = Joi.object({
    account_id: Joi.number().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    address: Joi.string().required(),
    telephone: Joi.number().required(),
  });

  return schema.validate(deliveryDriver);
}

module.exports = validateDeliveryDriver;
