/**
 * @swagger
 * tags:
 *   name: Properties
 *   description: Gestión de propiedades
 */

/**
 * @swagger
 * /api/v1/properties:
 *   get:
 *     summary: Obtener todas las propiedades
 *     tags: [Properties]
 *     responses:
 *       200:
 *         description: Lista de propiedades
 */

/**
 * @swagger
 * /api/v1/properties:
 *   post:
 *     summary: Crear una propiedad
 *     tags: [Properties]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               location:
 *                 type: string
 *               pricePerNight:
 *                 type: number
 *               maxDaysPerYear:
 *                 type: number
 *             example:
 *               title: Casa en Cartagena
 *               location: Cartagena
 *               pricePerNight: 200
 *               maxDaysPerYear: 60
 *     responses:
 *       201:
 *         description: Propiedad creada
 */

/**
 * @swagger
 * /api/v1/properties/{id}:
 *   get:
 *     summary: Obtener una propiedad
 *     tags: [Properties]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Propiedad encontrada
 *       404:
 *         description: No encontrada
 */

/**
 * @swagger
 * /api/v1/properties/{id}:
 *   put:
 *     summary: Actualizar propiedad completa
 *     tags: [Properties]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             title: Casa actualizada
 *             location: Cartagena
 *             pricePerNight: 250
 *             maxDaysPerYear: 80
 *     responses:
 *       200:
 *         description: Actualizada
 */

/**
 * @swagger
 * /api/v1/properties/{id}:
 *   patch:
 *     summary: Actualización parcial
 *     tags: [Properties]
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
 *             pricePerNight: 300
 *     responses:
 *       200:
 *         description: Actualizada parcialmente
 */

/**
 * @swagger
 * /api/v1/properties/{id}:
 *   delete:
 *     summary: Eliminar propiedad
 *     tags: [Properties]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Eliminada
 */
import express from "express";
import { create, getProperties } from "../controllers/propertyController.js";

const router = express.Router();

router.get("/", getProperties);
router.post("/", create);

export default router;
