const express = require('express');

const router = express.Router();

const todoController = require('../controller/todo');
const { authorized } = require('../middleware/authorization');

router.post('/create', authorized, todoController.createTodo);
router.get('/list', authorized, todoController.getListTodo);
router.delete('/delete/:id', authorized, todoController.deleteTodo);

module.exports = router;
