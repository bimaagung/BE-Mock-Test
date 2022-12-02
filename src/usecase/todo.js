class TodoUseCase {
  constructor(todoRepository) {
    this._todoRepository = todoRepository;
  }

  async createTodo(todo) {
    const result = {
      isSuccess: false,
      reason: null,
      data: null,
      statusCode: null,
    };

    // Uppercase title todo
    todo.title = todo.title.toUpperCase();

    const todoByName = await this._todoRepository.getTodoByTitle(todo.title, todo.userId);

    if (todoByName !== null) {
      result.isSuccess = false;
      result.reason = 'todo is existing';
      result.statusCode = 400;
      return result;
    }

    const createTodo = await this._todoRepository.createTodo(todo);

    result.isSuccess = true;
    result.data = createTodo;
    result.statusCode = 200;
    return result;
  }

  async getListTodo(userId) {
    const result = {
      isSuccess: false,
      reason: null,
      data: [],
      statusCode: null,
    };

    const todo = await this._todoRepository.getListTodo(userId);

    result.isSuccess = true;
    result.data = todo;
    result.statusCode = 200;
    return result;
  }

  async deleteTodo(id, userId) {
    const result = {
      isSuccess: false,
      reason: null,
      data: null,
      statusCode: null,
    };

    const todoById = await this._todoRepository.getTodoById(id, userId);

    if (todoById === null) {
      result.isSuccess = false;
      result.reason = 'todo not found';
      result.statusCode = 404;
      return result;
    }

    await this._todoRepository.deleteTodo(id);

    result.isSuccess = true;
    result.statusCode = 200;
    return result;
  }

  async updateTodo(id, todo, userId) {
    const result = {
      isSuccess: false,
      reason: null,
      data: null,
      statusCode: null,
    };

    const todoById = await this._todoRepository.getTodoById(id, userId);

    if (todoById === null) {
      result.isSuccess = false;
      result.reason = 'todo not found';
      result.statusCode = 404;
      return result;
    }

    await this._todoRepository.updateTodo(id, todo);

    const resultTodo = {
      id: todoById.id,
      title: todo.title,
      body: todo.body,
      userId,
      createdAt: todoById.createdAt,
      updatedAt: todoById.updatedAt,
    };

    result.isSuccess = true;
    result.statusCode = 200;
    result.data = resultTodo;
    return result;
  }

  async getTodoById(id, userId) {
    const result = {
      isSuccess: false,
      reason: null,
      data: null,
      statusCode: null,
    };

    const todo = await this._todoRepository.getTodoById(id, userId);

    if (todo === null) {
      result.isSuccess = false;
      result.reason = 'todo not found';
      result.statusCode = 404;
      return result;
    }

    result.isSuccess = true;
    result.statusCode = 200;
    result.data = todo;
    return result;
  }
}

module.exports = TodoUseCase;
