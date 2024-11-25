const express = require('express');
const { reg, login, verify, del } = require('../controllers/user');
const router = express.Router();

// api/user/reg
router.post('/reg', reg)

// api/user/login
router.post('/login', login);

// api/user/verify 
router.get('/verify', verify)

// api/user/del
router.get('/del', del)

module.exports = router;
