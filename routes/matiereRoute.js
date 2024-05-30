const express = require('express');
const MatiereController = require('../controllers/matiereController');
const app = express.Router();

const controller = new MatiereController();

app.get('/',controller.getAllMatiere);
app.get('/prof/:profId',controller.getAllMatiereByProf);
app.get('/matiere/:profId',controller.getAllMatiereByProfPagination);

module.exports = app;