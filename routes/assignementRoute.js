const express = require('express');
const AssignementController = require('../controllers/assignementController');
const router = express.Router();
const { verifyToken, checkRole } = require('../middleware/authMiddleware');

const controller = new AssignementController();

router.get('/',verifyToken,checkRole(['admin']),controller.getAllAssignements);

module.exports = router;