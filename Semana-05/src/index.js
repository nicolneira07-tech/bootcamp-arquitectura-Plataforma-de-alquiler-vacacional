
import express from "express";
import propertyRoutes from "./routes/propertyRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/v1/properties", propertyRoutes);
app.use("/api/v1/bookings", bookingRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
