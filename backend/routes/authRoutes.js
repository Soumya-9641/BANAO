const express = require('express');
const { register, login, forgotPassword, resetPassword } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.put('/resetPassword/:token', resetPassword);

module.exports = router;
