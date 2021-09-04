const Joi = require("joi");

function validateCustomer(customer) {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    address: Joi.string().required(),
    contact_number: Joi.number().required(),
  });

  return schema.validate(customer);
}

module.exports = validateCustomer;
