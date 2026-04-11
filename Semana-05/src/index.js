import express from "express";
import licenseRoutes from "./routes/licenseRoutes.js";
import incidentRoutes from "./routes/incidentRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

import swaggerUi from "swagger-ui-express";

const app = express();
app.use(express.json());

/* 🔌 RUTAS */
app.use("/licenses", licenseRoutes);
app.use("/incidents", incidentRoutes);
app.use("/bookings", bookingRoutes);

/* 📄 DOCUMENTACIÓN SWAGGER */
const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "API Alquiler Vacacional",
    version: "1.0.0",
    description: "API completa con licenses, incidents y bookings"
  },
  paths: {
    "/licenses/{propertyId}": {
      post: {
        summary: "Crear licencia",
        parameters: [{ name: "propertyId", in: "path", required: true }],
        responses: { 200: { description: "Licencia creada" } }
      },
      get: {
        summary: "Obtener licencia",
        parameters: [{ name: "propertyId", in: "path", required: true }],
        responses: { 200: { description: "Licencia encontrada" } }
      }
    },
    "/incidents/{propertyId}": {
      post: {
        summary: "Crear incidente",
        parameters: [{ name: "propertyId", in: "path", required: true }],
        responses: { 200: { description: "Incidente creado" } }
      },
      get: {
        summary: "Ver incidentes",
        parameters: [{ name: "propertyId", in: "path", required: true }],
        responses: { 200: { description: "Lista de incidentes" } }
      }
    },
    "/bookings/{propertyId}": {
      post: {
        summary: "Crear reserva",
        parameters: [{ name: "propertyId", in: "path", required: true }],
        responses: { 200: { description: "Reserva creada" } }
      },
      get: {
        summary: "Ver reservas",
        parameters: [{ name: "propertyId", in: "path", required: true }],
        responses: { 200: { description: "Lista de reservas" } }
      }
    },
    "/bookings/{propertyId}/{bookingId}": {
      get: {
        summary: "Ver reserva específica",
        parameters: [
          { name: "propertyId", in: "path", required: true },
          { name: "bookingId", in: "path", required: true }
        ],
        responses: { 200: { description: "Reserva encontrada" } }
      }
    },
    "/bookings/{propertyId}/{bookingId}/cancel": {
      patch: {
        summary: "Cancelar reserva",
        parameters: [
          { name: "propertyId", in: "path", required: true },
          { name: "bookingId", in: "path", required: true }
        ],
        responses: { 200: { description: "Reserva cancelada" } }
      }
    }
  }
};

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* 🚀 SERVER */
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Swagger en http://localhost:${PORT}/api-docs`);
});