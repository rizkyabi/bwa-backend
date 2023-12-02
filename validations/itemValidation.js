const Joi = require("joi");

const itemSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  country: Joi.string().default("Indonesia"),
  city: Joi.string().required(),
  isPopular: Joi.boolean(),
  description: Joi.string().required(),
  imageId: Joi.array().items(Joi.object({ _id: Joi.string().required() })).required(),
  featureId: Joi.array().items(Joi.object({ _id: Joi.string().required() })).required(),
  activityId: Joi.array().items(Joi.object({ _id: Joi.string().required() })).required(),
});

module.exports = itemSchema;  
