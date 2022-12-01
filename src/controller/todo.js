const resData = require('../helper/reponse');

module.exports = {
  createTodo: async (req, res, next) => {
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
    try {
      const { id } = req.params;

      const result = await req.todoUC.deleteTodo(id);

      if (!result.isSuccess) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      return res.status(result.statusCode).json(resData.success());
    } catch (error) {
      next(error);
    }
  },

  updateTodo: async (req, res, next) => {
    try {
      const { id } = req.params;
      const todo = {
        title: req.body.title,
        body: req.body.body,
      };

      const result = await req.todoUC.updateTodo(id, todo);

      if (!result.isSuccess) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      return res.status(result.statusCode).json(resData.success());
    } catch (error) {
      next(error);
    }
  },
};
