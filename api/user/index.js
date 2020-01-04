const express = require('express');
const controller = require('./user.controller');

const router = express.Router();

router.get('/list', controller.getUserList);
router.get('/profile/:id', controller.getUserProfile);

module.exports = router;
