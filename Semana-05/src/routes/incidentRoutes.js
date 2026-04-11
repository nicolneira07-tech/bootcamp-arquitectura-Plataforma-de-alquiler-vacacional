/**
 * @swagger
 * tags:
 *   name: Incidents
 */

/**
 * @swagger
 * /api/v1/properties/{id}/incidents:
 *   post:
 *     summary: Crear incidencia
 *     tags: [Incidents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             description: Ruido excesivo
 *     responses:
 *       201:
 *         description: Incidencia creada
 */

/**
 * @swagger
 * /api/v1/properties/{id}/incidents:
 *   get:
 *     summary: Listar incidencias
 *     tags: [Incidents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de incidencias
 */

import express from "express";
import { create, getAll } from "../controllers/incidentController.js";

const router = express.Router();

router.post("/:id/incidents", create);
router.get("/:id/incidents", getAll);

export default router;