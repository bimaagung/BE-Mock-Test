const express = require('express');

const router = express.Router();

const todoController = require('../controller/todo');
const { authorized } = require('../middleware/authorization');

router.post('/create', authorized, todoController.createTodo);
router.get('/list', authorized, todoController.getListTodo);
router.get('/:id', authorized, todoController.getTodoById);
router.delete('/delete/:id', authorized, todoController.deleteTodo);
router.put('/update/:id', authorized, todoController.updateTodo);

module.exports = router;
