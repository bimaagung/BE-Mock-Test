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

    const todoByName = await this._todoRepository.getTodoByTitle(todo.title);

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

  async deleteTodo(id) {
    const result = {
      isSuccess: false,
      reason: null,
      data: null,
      statusCode: null,
    };

    const todoById = await this._todoRepository.getTodoById(id);

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
}

module.exports = TodoUseCase;
