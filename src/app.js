require('dotenv').config();

const express = require('express');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');
const moment = require('moment-timezone');
let logger = require('morgan');
const fs = require('fs');
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

const ACCESS_LOG = process.env.ACCESS_LOG || './logs/access.log';
const ERROR_LOG = process.env.ERROR_LOG || './logs/errors.log';

logger.token('date', (req, res, tz) => moment().tz(tz).format());
logger.format('custom_format', ':remote-addr - :remote-user [:date[Asia/Jakarta]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"');

app.use(logger('custom_format', {
  stream: fs.createWriteStream(ACCESS_LOG, { flags: 'a' }),
}));

app.use(logger('custom_format', {
  skip(req, res) { return res.statusCode < 400; },
  stream: fs.createWriteStream(ERROR_LOG, { flags: 'a' }),
}));

app.use((req, res, next) => {
  req.authUC = authUC;
  req.todoUC = todoUC;
  next();
});

app.get('/', (req, res) => {
  // #swagger.ignore = true
  res.send('Welcome Backend Mock Test');
});

app.use('/api/auth', authRouter);
app.use('/api/todo', todoRouter);

app.use(serverError);

const swaggerDocument = require('../document/output/docs.json');

app.use('/docs', swaggerUI.serveFiles(swaggerDocument), swaggerUI.setup(swaggerDocument));

module.exports = app;
