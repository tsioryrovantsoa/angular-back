const express = require('express');
const ClasseController = require('../controllers/classeController');
const app = express.Router();

const controller = new ClasseController();

/**
 * @openapi
 * /classes:
 *   get:
 *     summary: Récupérer toutes les classes
 *     description: Récupère toutes les classes disponibles.
 *     responses:
 *       '200':
 *         description: Liste des classes récupérée avec succès
 */
app.get('/',controller.getAllClasse);
app.get('/matiere/:matiereId',controller.getClassesByMatiereId);

module.exports = app;