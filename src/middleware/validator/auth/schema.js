const Joi = require('joi');

const LoginPayloadSchema = Joi.object({
  pin: Joi.number().required(),
});

module.exports = { LoginPayloadSchema };
