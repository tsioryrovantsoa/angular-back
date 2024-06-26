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
app.get('/',verifyToken,checkRole(['admin','professeur','eleve']),controller.getAllAssignements);

app.get('/withlimit',verifyToken,checkRole(['admin']),controller.getAssignementWithLimit);

app.get('/:id',verifyToken,checkRole(['admin','professeur','eleve']),controller.getAssignementById);

app.post('/',verifyToken,checkRole(['admin','professeur']),controller.createAssignment);

app.post('/admin/prof',verifyToken,checkRole(['admin','professeur']),controller.createAssignmentAdmin);

app.put('/:id',verifyToken,checkRole(['admin']),controller.updateAssignment);

app.put('/note/:id',verifyToken,checkRole(['admin','professeur']),controller.noterAssignement);

app.delete('/:id',verifyToken,checkRole(['admin']),controller.deleteAssignment);

module.exports = app;