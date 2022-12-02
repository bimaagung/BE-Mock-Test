const TodoUseCase = require('../../usecase/todo')

describe('todo test', () => { 
    describe('createTodo test', () => { 
        test("should isSuccess : false, statusCode: 400, and reason 'todo is existing'", async () => {
            // Arrange 
            const todo = {
                id: 1,
                title: 'TODO 1',
                body: 'This is one todo',
                userId:1,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }

            const mockTodoRepository = {
                getTodoByTitle: jest.fn().mockReturnValue(todo)
            }

            const todoUC = new TodoUseCase(mockTodoRepository)

            // Action
            const result = await todoUC.createTodo({
                title: todo.title,
                body: todo.body,
                userId: todo.userId
            })

            // Assert
            expect(result.isSuccess).toBeFalsy();
            expect(result.statusCode).toEqual(400);
            expect(result.reason).toEqual('todo is existing');
            expect(mockTodoRepository.getTodoByTitle).toHaveBeenCalledWith(todo.title, todo.userId);
        });

        test("should isSuccess : true, statusCode: 200, and data is correctly", async () => {
            // Arrange 
            const todo = {
                id: 1,
                title: 'TODO 1',
                body: 'This is one todo',
                userId:1,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }

            const mockTodoRepository = {
                getTodoByTitle: jest.fn().mockReturnValue(null),
                createTodo: jest.fn().mockReturnValue(todo)
            }

            const todoUC = new TodoUseCase(mockTodoRepository)

            // Action
            const result = await todoUC.createTodo({
                title: todo.title,
                body: todo.body,
                userId: todo.userId
            })

            // Assert
            expect(result.isSuccess).toBeTruthy();
            expect(result.statusCode).toEqual(201);
            expect(result.data).toEqual(todo);
            expect(mockTodoRepository.getTodoByTitle).toHaveBeenCalledWith(todo.title, todo.userId);
            expect(mockTodoRepository.createTodo).toHaveBeenCalledWith(
                {
                    title: todo.title,
                    body: todo.body,
                    userId: todo.userId
                }
            );
        });
     })

     describe('getListTodo test', () => { 
        test('should isSuccess: true, statusCode: 200, and data is correctly', async () => {
            // Arrange
            const todo = [
                {
                    id: 1,
                    title: 'TODO 1',
                    body: 'This is one todo',
                    userId:1,
                    createdAt: Date.now(),
                    updatedAt: Date.now()
                }
            ]

            const mockTodoRepository = {
                getListTodo: jest.fn().mockReturnValue(todo)
            }

            const todoUC = new TodoUseCase(mockTodoRepository)

            // Action
            const result = await todoUC.getListTodo(todo.userId)

            // Assert
            expect(result.isSuccess).toBeTruthy();
            expect(result.statusCode).toEqual(200);
            expect(result.data).toEqual(todo);
            expect(mockTodoRepository.getListTodo).toHaveBeenCalledWith(todo.userId);
        });
      })

     describe('deleteTodo test', () => { 
        test("should isSuccess: false, statusCode: 404, and reason 'todo not found'", async () => {
            // Arrange
            const todo = 
            {
                id: 1,
                title: 'TODO 1',
                body: 'This is one todo',
                userId:1,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
            

            const mockTodoRepository = {
                getTodoById: jest.fn().mockReturnValue(null),
            }

            const todoUC = new TodoUseCase(mockTodoRepository)

            // Action
            const result = await todoUC.deleteTodo(todo.id, todo.userId)

            // Assert
            expect(result.isSuccess).toBeFalsy();
            expect(result.statusCode).toEqual(404);
            expect(result.reason).toEqual('todo not found');
            expect(mockTodoRepository.getTodoById).toHaveBeenCalledWith(todo.id, todo.userId);
        });

        test("should isSuccess: true, statusCode: 200, and data is correctly", async () => {
            // Arrange
            const todo = 
            {
                id: 1,
                title: 'TODO 1',
                body: 'This is one todo',
                userId:1,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
            

            const mockTodoRepository = {
                getTodoById: jest.fn().mockReturnValue(todo),
                deleteTodo: jest.fn().mockReturnValue(true),
            }

            const todoUC = new TodoUseCase(mockTodoRepository)

            // Action
            const result = await todoUC.deleteTodo(todo.id, todo.userId)

            // Assert
            expect(result.isSuccess).toBeTruthy();
            expect(result.statusCode).toEqual(200);
            expect(mockTodoRepository.getTodoById).toHaveBeenCalledWith(todo.id, todo.userId);
            expect(mockTodoRepository.deleteTodo).toHaveBeenCalledWith(todo.id);
        });
      })
    
     describe('updateTodo test', () => { 
        test("should isSuccess: false, statusCode: 404, and reason 'todo not found'", async () => {
            // Arrange
            const todo = 
            {
                id: 1,
                title: 'TODO 1',
                body: 'This is one todo',
                userId:1,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }

            const todoPayload = {
                title: 'TODO 2',
                body: 'this is two todo',
            }
            

            const mockTodoRepository = {
                getTodoById: jest.fn().mockReturnValue(null),
            }

            const todoUC = new TodoUseCase(mockTodoRepository)

            // Action
            const result = await todoUC.updateTodo(todo.id, todoPayload, todo.userId) // id todo, payload todo, user id

            // Assert
            expect(result.isSuccess).toBeFalsy();
            expect(result.statusCode).toEqual(404);
            expect(result.reason).toEqual('todo not found');
            expect(mockTodoRepository.getTodoById).toHaveBeenCalledWith(todo.id, todo.userId);
        });

        test("should isSuccess: true, statusCode: 200, and data is correctly", async () => {
            // Arrange
            const todo = 
            {
                id: 1,
                title: 'TODO 1',
                body: 'This is one todo',
                userId:1,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
            
            const todoPayload = {
                title: 'TODO 2',
                body: 'this is two todo',
            } 

            const mockTodoRepository = {
                getTodoById: jest.fn().mockReturnValue(todo),
                updateTodo: jest.fn().mockReturnValue(true),
            }

            const todoUC = new TodoUseCase(mockTodoRepository)

            // Action
            const result = await todoUC.updateTodo(todo.id, todoPayload, todo.userId) // id todo, payload todo, user id

            // Assert
            expect(result.isSuccess).toBeTruthy();
            expect(result.statusCode).toEqual(200);
            expect(result.data).toEqual({
                id: todo.id,
                title: todoPayload.title,
                body: todoPayload.body,
                userId: todo.userId,
                createdAt: todo.createdAt,
                updatedAt: todo.updatedAt
            });
            expect(mockTodoRepository.getTodoById).toHaveBeenCalledWith(todo.id, todo.userId);
            expect(mockTodoRepository.updateTodo).toHaveBeenCalledWith(1, todoPayload);
        });
      })

     describe('getTodoById test', () => { 
        test("should isSuccess: false, statusCode: 404, and reason 'todo not found'", async () => {
            // Arrange
            const todo = 
            {
                id: 1,
                title: 'TODO 1',
                body: 'This is one todo',
                userId:1,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }
            
            const mockTodoRepository = {
                getTodoById: jest.fn().mockReturnValue(null),
            }

            const todoUC = new TodoUseCase(mockTodoRepository)

            // Action
            const result = await todoUC.getTodoById(todo.id, todo.userId) // id todo, id user

            // Assert
            expect(result.isSuccess).toBeFalsy();
            expect(result.statusCode).toEqual(404);
            expect(result.reason).toEqual('todo not found');
            expect(mockTodoRepository.getTodoById).toHaveBeenCalledWith(todo.id, todo.userId);
        });

        test("should isSuccess: true, statusCode: 200, and data is correctly", async () => {
            // Arrange
            const todo = 
            {
                id: 1,
                title: 'TODO 1',
                body: 'This is one todo',
                userId:1,
                createdAt: Date.now(),
                updatedAt: Date.now()
            }

            const mockTodoRepository = {
                getTodoById: jest.fn().mockReturnValue(todo),
            }

            const todoUC = new TodoUseCase(mockTodoRepository)

            // Action
            const result = await todoUC.getTodoById(todo.id, todo.userId) // id todo, id user

            // Assert
            expect(result.isSuccess).toBeTruthy();
            expect(result.statusCode).toEqual(200);
            expect(result.data).toEqual(todo);
            expect(mockTodoRepository.getTodoById).toHaveBeenCalledWith(todo.id, todo.userId);
        });
      })
 })