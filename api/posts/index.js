const express = require('express');
const User = require('../../model/user');

const controller = require('./posts.controller');

const router = express.Router();

router.get('/', controller.postList);

router.get('/test', async () => User.create({
    email: 'asdf',
    password: 'asdf',
    nickname: 'asdf',
    thumbnail: 'asdf',
}));

module.exports = router;
