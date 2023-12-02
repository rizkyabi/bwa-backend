const Joi = require("joi");

const bankSchema = Joi.object({
  nameBank: Joi.string().required(),
  nomorRekening: Joi.string().required(),
  name: Joi.string().required(),
});

module.exports = bankSchema;
