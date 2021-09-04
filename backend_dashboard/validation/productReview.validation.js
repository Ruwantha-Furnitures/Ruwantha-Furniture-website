const Joi = require("joi");

function validateProductReview(productReview) {
  const schema = Joi.object({
    product_id: Joi.number().required(),
    feedback: Joi.string().required(),
    rating_points: Joi.number().required(),
  });

  return schema.validate(productReview);
}

module.exports = validateProductReview;
