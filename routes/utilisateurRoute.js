const express = require('express');
const app = express.Router();
const { verifyToken, checkRole } = require('../middleware/authMiddleware');
const UtilisateurController = require('../controllers/utilisateurController');

const controller = new UtilisateurController();

app.get('/profs',verifyToken,checkRole(['admin']),controller.getAllProf);

app.get('/eleves',verifyToken,checkRole(['admin']),controller.getAllEleve);

module.exports = app;