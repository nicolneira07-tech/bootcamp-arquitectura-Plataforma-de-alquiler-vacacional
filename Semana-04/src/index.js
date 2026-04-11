const express = require('express');
const app = express(); // 

const propertyRoutes = require('./routes/property.routes');

// middlewares
app.use(express.json());

// rutas
app.use('/api/v1/properties', propertyRoutes);

// swagger
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./openapi.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// servidor
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});