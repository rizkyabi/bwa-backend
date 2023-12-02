const Joi = require("joi");

const bookingSchema = Joi.object({
  bookingStartDate: Joi.date().required(),
  bookingEndDate: Joi.date().required(),
  itemId: Joi.array()
    .items(
      Joi.object({
        _id: Joi.string().required(),
        price: Joi.number().required(),
        night: Joi.number().required(),
      })
    )
    .required(),
  memberId: Joi.string()
    .items(Joi.object({ _id: Joi.string().required() }))
    .required(),
  bankId: Joi.array()
    .items(Joi.string({ _id: Joi.string().required() }))
    .required(),
  proofPayment: Joi.string().required(),
  bankFrom: Joi.string().required(),
  accountHolder: Joi.string().required(),
  imageUrl: Joi.string().required(),
  status: Joi.string().required(),
});

module.exports = bookingSchema;
