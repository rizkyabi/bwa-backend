const Joi = require("joi");

const imageSchema = Joi.object({
  imageUrl: Joi.string().required(),
});

module.exports = imageSchema;
