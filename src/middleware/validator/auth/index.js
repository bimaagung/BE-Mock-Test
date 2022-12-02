const { LoginPayloadSchema } = require('./schema');
const resData = require('../../../helper/reponse');

const AuthValidator = {
  validatorLogin: async (req, res, next) => {
    const validationResult = LoginPayloadSchema.validate(req.body);

    if (validationResult.error) {
      return res.status(400).json(resData.failed(validationResult.error.details[0].message));
    }

    next();
  },
};

module.exports = AuthValidator;
