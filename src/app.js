require('dotenv').config();

const express = require('express');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');
const serverError = require('./middleware/server_error');

const app = express();

const tokenManager = require('./helper/tokenManager');

const UserRepository = require('./repository/auth');

const AuthUseCase = require('./usecase/auth');

const authUC = new AuthUseCase(new UserRepository(), tokenManager);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  req.authUC = authUC;
  next();
});

const authRouter = require('./routes/auth');

app.get('/', (req, res) => {
  res.send('Welcome Backend Mock Test');
});
app.use('/api/auth', authRouter);

app.use(serverError);

const swaggerDocument = require('../document/output/docs.json');

app.use('/docs', swaggerUI.serveFiles(swaggerDocument), swaggerUI.setup(swaggerDocument));

module.exports = app;
