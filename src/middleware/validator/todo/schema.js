const Joi = require('joi');

const TodoPayloadSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string(),
});

module.exports = { TodoPayloadSchema };
