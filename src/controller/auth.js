const resData = require('../helper/reponse');

module.exports = {
  login: async (req, res, next) => {
    /*
      #swagger.tags = ['Auth']
      #swagger.description = 'Pin login for user A  : 1234 & user B : 4321'
      #swagger.requestBody = {
        required: true,
        schema: { $ref: "#/definitions/bodyLogin" }
      }
      #swagger.responses[200] = {
        description: "Success login",
          content: {
            "application/json": {
                schema:{
                    $ref: "#/definitions/successLogin"
                }
            }
          }
      }

      #swagger.responses[400] = {
        description: "Account unavailable",
          content: {
              "application/json": {
                  schema:{
                      $ref: "#/definitions/failedLogin"
                  }
              }
          }
      }
    */
    try {
      const { pin } = req.body;

      const result = await req.authUC.login(pin);

      if (result.isSuccess === false) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      return res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },
};
