const express = require('express');
const router = express.Router();
const { getAccounts, createAccount } = require('../controllers/accountController');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

router.get('/', authMiddleware, roleMiddleware(['manager', 'teller']), getAccounts);
router.post('/', authMiddleware, roleMiddleware(['manager']), createAccount);

module.exports = router;
