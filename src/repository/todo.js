/* eslint-disable consistent-return */
const { Todo } = require('../models');

class TodoRepository {
  constructor() {
    this._todoModel = Todo;
  }

  async createTodo(todo) {
    const result = await this._todoModel.create(todo);
    return result;
  }

  async getTodoByTitle(title) {
    const result = await this._todoModel.findOne({ where: { title } });
    return result;
  }

  async getTodoById(id) {
    const result = await this._todoModel.findOne({ where: { id } });
    return result;
  }

  async getListTodo(userId) {
    const result = await this._todoModel.findAll({
      where: { userId },
      order: [
        ['createdAt', 'DESC'],
      ],
    });
    return result;
  }

  async deleteTodo(id) {
    const result = await this._todoModel.destroy({ where: { id } });
    return result;
  }

  async updateTodo(id, todo) {
    const result = await this._todoModel.update(todo, { where: { id } });
    return result;
  }
}

module.exports = TodoRepository;
