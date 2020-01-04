const express = require('express');

const controller = require('./posts.controller');

const router = express.Router();

router.get('/', controller.postList);

module.exports = router;
