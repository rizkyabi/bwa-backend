const Joi = require("joi");

const activitySchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  imageUrl: Joi.string().required(),
  isPopular: Joi.boolean(),
});

module.exports = activitySchema;
