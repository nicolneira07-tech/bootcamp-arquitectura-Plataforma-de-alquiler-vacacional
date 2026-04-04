const express = require('express');
const app = express();

const propertyRoutes = require('./routes/property.routes');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./openapi.yaml');

const errorHandler = require('./middleware/error-handler');

app.use(express.json());

// Rutas
app.use('/api/v1/properties', propertyRoutes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware de errores
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
