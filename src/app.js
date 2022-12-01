require('dotenv').config();

const express = require('express');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');
const serverError = require('./middleware/server_error');

const app = express();

const tokenManager = require('./helper/tokenManager');

const UserRepository = require('./repository/auth');
const TodoRepository = require('./repository/todo');

const AuthUseCase = require('./usecase/auth');
const TodoUseCase = require('./usecase/todo');

const authUC = new AuthUseCase(new UserRepository(), tokenManager);
const todoUC = new TodoUseCase(new TodoRepository());

const authRouter = require('./routes/auth');
const todoRouter = require('./routes/todo');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  req.authUC = authUC;
  req.todoUC = todoUC;
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome Backend Mock Test');
});

app.use('/api/auth', authRouter);
app.use('/api/todo', todoRouter);

app.use(serverError);

const swaggerDocument = require('../document/output/docs.json');

app.use('/docs', swaggerUI.serveFiles(swaggerDocument), swaggerUI.setup(swaggerDocument));

module.exports = app;
