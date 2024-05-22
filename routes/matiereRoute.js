const express = require('express');
const MatiereController = require('../controllers/matiereController');
const app = express.Router();

const controller = new MatiereController();

app.get('/prof/:profId',controller.getAllMatiereByProf);

module.exports = app;