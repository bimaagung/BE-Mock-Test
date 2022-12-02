const { TodoPayloadSchema } = require('./schema');
const resData = require('../../../helper/reponse');

const TodoValidator = {
  validatorTodo: async (req, res, next) => {
    const validationResult = TodoPayloadSchema.validate(req.body);

    if (validationResult.error) {
      return res.status(400).json(resData.failed(validationResult.error.details[0].message));
    }

    next();
  },
};

module.exports = TodoValidator;
