const resData = require('../helper/reponse');

module.exports = {
  createTodo: async (req, res, next) => {
    /*
      #swagger.tags = ['Todo']
      #swagger.requestBody = {
        required: true,
        schema: { $ref: "#/definitions/bodyTodo" }
      }
      #swagger.responses[201] = {
        description: "Success create todo",
          content: {
            "application/json": {
                schema:{
                    $ref: "#/definitions/successTodoById"
                }
            }
          }
      }

      #swagger.responses[400] = {
        description: "Todo is existing",
          content: {
              "application/json": {
                  schema:{
                      $ref: "#/definitions/todoExisting"
                  }
              }
          }
      }

      #swagger.responses[401] = {
        description: "Unauthorized",
          content: {
              "application/json": {
                  schema:{
                      $ref: "#/definitions/unauthorized"
                  }
              }
          }
      }
    */
    try {
      const todo = {
        title: req.body.title,
        body: req.body.body,
        userId: req.user.id,
      };

      const result = await req.todoUC.createTodo(todo);

      if (!result.isSuccess) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      return res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },

  getListTodo: async (req, res, next) => {
    /*
      #swagger.tags = ['Todo']
      #swagger.responses[200] = {
        description: "Success get list todo",
          content: {
            "application/json": {
                schema:{
                    $ref: "#/definitions/successTodoList"
                }
            }
          }
      }

      #swagger.responses[401] = {
        description: "Unauthorized",
          content: {
              "application/json": {
                  schema:{
                      $ref: "#/definitions/unauthorized"
                  }
              }
          }
      }
    */
    try {
      const userId = req.user.id;

      const result = await req.todoUC.getListTodo(userId);

      if (!result.isSuccess) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      return res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },

  deleteTodo: async (req, res, next) => {
    /*
      #swagger.tags = ['Todo']
      #swagger.responses[200] = {
        description: "Success delete todo",
          content: {
            "application/json": {
                schema:{
                    $ref: "#/definitions/successTodo"
                }
            }
          }
      }

      #swagger.responses[400] = {
        description: "Todo not found",
          content: {
              "application/json": {
                  schema:{
                      $ref: "#/definitions/todoNotFound"
                  }
              }
          }
      }

      #swagger.responses[401] = {
        description: "Unauthorized",
          content: {
              "application/json": {
                  schema:{
                      $ref: "#/definitions/unauthorized"
                  }
              }
          }
      }
    */
    try {
      const { id } = req.params;
      const userId = req.user.id;

      const result = await req.todoUC.deleteTodo(id, userId);

      if (!result.isSuccess) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      return res.status(result.statusCode).json(resData.success());
    } catch (error) {
      next(error);
    }
  },

  updateTodo: async (req, res, next) => {
    /*
      #swagger.tags = ['Todo']
      #swagger.requestBody = {
        required: true,
        schema: { $ref: "#/definitions/bodyUpdateTodo" }
      }
      #swagger.responses[200] = {
        description: "Success update todo",
          content: {
            "application/json": {
                schema:{
                    $ref: "#/definitions/successTodoByIdUpdate"
                }
            }
          }
      }

      #swagger.responses[400] = {
        description: "Todo not found",
          content: {
              "application/json": {
                  schema:{
                      $ref: "#/definitions/todoNotFound"
                  }
              }
          }
      }

      #swagger.responses[401] = {
        description: "Unauthorized",
          content: {
              "application/json": {
                  schema:{
                      $ref: "#/definitions/unauthorized"
                  }
              }
          }
      }
    */
    try {
      const { id } = req.params;
      const todo = {
        title: req.body.title,
        body: req.body.body,
      };
      const userId = req.user.id;

      const result = await req.todoUC.updateTodo(id, todo, userId);

      if (!result.isSuccess) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      return res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },

  getTodoById: async (req, res, next) => {
    /*
      #swagger.tags = ['Todo']
      #swagger.responses[200] = {
        description: "Success get todo by id",
          content: {
            "application/json": {
                schema:{
                    $ref: "#/definitions/successTodoById"
                }
            }
          }
      }

      #swagger.responses[400] = {
        description: "Todo not found",
          content: {
              "application/json": {
                  schema:{
                      $ref: "#/definitions/todoNotFound"
                  }
              }
          }
      }

      #swagger.responses[401] = {
        description: "Unauthorized",
          content: {
              "application/json": {
                  schema:{
                      $ref: "#/definitions/unauthorized"
                  }
              }
          }
      }
    */
    try {
      const { id } = req.params;
      const userId = req.user.id;

      const result = await req.todoUC.getTodoById(id, userId);

      if (!result.isSuccess) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      return res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },
};
