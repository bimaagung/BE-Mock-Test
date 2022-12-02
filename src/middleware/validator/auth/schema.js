const Joi = require('joi');

const LoginPayloadSchema = Joi.object({
  pin: Joi.number().max(4).required(),
});

module.exports = { LoginPayloadSchema };
