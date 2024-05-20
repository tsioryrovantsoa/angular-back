const express = require('express');
const AssignementController = require('../controllers/assignementController');
const router = express.Router();

const controller = new AssignementController();

router.get('/',controller.getAllAssignements);

module.exports = router;