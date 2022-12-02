const express = require('express');

const router = express.Router();

const authController = require('../controller/auth');
const authValidator = require('../middleware/validator/auth');

router.post('/login', authValidator.validatorLogin, authController.login);

module.exports = router;
