const express = require('express');
const ClasseController = require('../controllers/classeController');
const router = express.Router();

const controller = new ClasseController();

router.get('/',controller.getAllClasse);

module.exports = router;