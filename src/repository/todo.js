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

  async getTodoByTitle(title, userId) {
    const result = await this._todoModel.findOne({ where: { title, userId } });
    return result;
  }

  async getTodoById(id, userId) {
    const result = await this._todoModel.findOne({ where: { id, userId } });
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
