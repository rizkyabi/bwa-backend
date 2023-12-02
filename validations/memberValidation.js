const Joi = require("joi");

const memberSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  phoneNumber: Joi.string().required(),
});

module.exports = memberSchema;
