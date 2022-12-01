const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
  info: {
    title: 'Customer - API E-commerce Platinum Maju Jaya',
    description: 'API ecommerce App for project platinum for customer, create by Maju Jaya',
    termsOfService: 'http://swagger.io/terms/',
    contact: {
      email: 'platinum.majujaya@gmail.com',
    },
  },
  host: 'localhost:3000',
  schemes: ['http'],
  securityDefinitions: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
  definitions: {

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
