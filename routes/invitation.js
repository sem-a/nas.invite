const express = require('express');
const { index, create, del } = require('../controllers/invitation');
const router = express.Router();

// api/invitation
router.get('/', index);

// api/invitation/create
router.post('/create', create)

// api/invitation/del
router.post('/del', del);

module.exports = router;
