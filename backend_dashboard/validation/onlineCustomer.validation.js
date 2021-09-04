const Joi = require("joi");

function validateOnlineCustomer(onlineCustomer) {
  const schema = Joi.object({
    customer_id: Joi.number().required(),
    account_id: Joi.number().required(),
  });

  return schema.validate(onlineCustomer);
}

module.exports = validateOnlineCustomer;
