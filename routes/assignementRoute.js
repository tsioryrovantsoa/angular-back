const express = require('express');
const AssignementController = require('../controllers/assignementController');
const app = express.Router();
const { verifyToken, checkRole } = require('../middleware/authMiddleware');

const controller = new AssignementController();

/**
 * @openapi
 * /assignements:
 *   get:
 *     summary: Récupérer tous les devoirs
 *     description: Récupère tous les devoirs disponibles.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Liste des devoirs récupérée avec succès
 *       '401':
 *         description: Non autorisé - Jeton d'authentification manquant ou invalide
 *       '403':
 *         description: Interdit - L'utilisateur n'a pas les autorisations nécessaires
 */
app.get('/',verifyToken,checkRole(['admin']),controller.getAllAssignements);

app.get('/:id',verifyToken,checkRole(['admin']),controller.getAssignementById);

module.exports = app;