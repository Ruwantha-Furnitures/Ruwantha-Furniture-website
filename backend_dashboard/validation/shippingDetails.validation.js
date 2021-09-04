const Joi = require("joi");

function validateShippingDetails(shippingDetails) {
  const schema = Joi.object({
    order_id: Joi.number().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    shipping_address: Joi.string().required(),
    contact_number: Joi.number().required(),
    charge_id: Joi.number().required(),
  });

  return schema.validate(shippingDetails);
}

module.exports = validateShippingDetails;
