const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  failOnErrors: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Test",
      version: "1.0.0",
      description: "Description de votre API",
    },
  },
  apis: ["routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(swaggerDefinition);

module.exports = swaggerSpec;
