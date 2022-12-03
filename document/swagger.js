const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const authSchemaReq = require('../document/schema/request/auth')
const todoSchemaReq = require('../document/schema/request/todo')
const authSchemaRes = require('../document/schema/response/auth')
const todoSchemaRes = require('../document/schema/response/todo')

const doc = {
  info: {
    title: 'Backend Engineer Mock Test',
    description: 'Mock test requirements for job connect binar academy ',
    termsOfService: 'http://swagger.io/terms/',
    contact: {
      email: 'bimaagungsetya@gmail.com',
    },
  },
  host: 'http://ec2-54-169-152-98.ap-southeast-1.compute.amazonaws.com:5000',
  schemes: ['http'],
  securityDefinitions: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
  definitions: {
    bodyLogin: authSchemaReq.login,
    successLogin: authSchemaRes.successLogin,
    failedLogin: authSchemaRes.notAvailable,

    bodyTodo: todoSchemaReq.todo,
    bodyUpdateTodo: todoSchemaReq.updateTodo,
    successTodoList: todoSchemaRes.successTodoList, 
    successTodoById: todoSchemaRes.successTodoById,
    successTodoByIdUpdate: todoSchemaRes.successTodoByIdUpdate,
    successTodo: todoSchemaRes.successTodo,
    todoExisting: todoSchemaRes.todoExisting,
    todoNotFound: todoSchemaRes.todoNotFound,
    unauthorized: todoSchemaRes.unauthorized
  },
};

const outputFile = './document/output/docs.json';
const endpointsFiles = ['./src/app.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc).then((r) => {
  console.log(r);
});
