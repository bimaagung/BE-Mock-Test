const resData = require('../helper/reponse');

module.exports = {
  login: async (req, res, next) => {
    /*
      #swagger.tags = ['Auth']
    */
    try {
      const { pin } = req.body;

      const result = await req.authUC.login(pin);

      if (!result) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      return res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },
};
