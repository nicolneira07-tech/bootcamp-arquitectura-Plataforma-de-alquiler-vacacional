/**
 * @swagger
 * tags:
 *   name: Bookings
 */

/**
 * @swagger
 * /api/v1/properties/{id}/bookings:
 *   post:
 *     summary: Crear una reserva
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la propiedad
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             guestName: Ana
 *             days: 5
 *     responses:
 *       201:
 *         description: Reserva creada
 *       400:
 *         description: Error (sin licencia o exceso de días)
 */

import express from "express";
import { create } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/:id/bookings", create);

export default router;