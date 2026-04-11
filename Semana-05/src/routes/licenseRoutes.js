/**
 * @swagger
 * tags:
 *   name: License
 */

/**
 * @swagger
 * /api/v1/properties/{id}/license:
 *   post:
 *     summary: Crear licencia
 *     tags: [License]
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
 *             number: LIC-123
 *             valid: true
 *     responses:
 *       201:
 *         description: Licencia creada
 */

/**
 * @swagger
 * /api/v1/properties/{id}/license:
 *   get:
 *     summary: Obtener licencia
 *     tags: [License]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Licencia encontrada
 */

import express from "express";
import { create, get } from "../controllers/licenseController.js";

const router = express.Router();

router.post("/:id/license", create);
router.get("/:id/license", get);

export default router;