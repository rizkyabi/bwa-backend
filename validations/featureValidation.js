const Joi = require("joi");

const featureSchema = Joi.object({
  name: Joi.string().required(),
  qty: Joi.number().required(),
  imageUrl: Joi.string().required(),
});

module.exports = featureSchema;
