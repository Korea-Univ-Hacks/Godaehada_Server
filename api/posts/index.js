const express = require('express');
const User = require('../../model/user');

const controller = require('./posts.controller');

const router = express.Router();

router.get('/', controller.postList);

router.get('/test', async () => User.create({
    email: 'jominjimail@hanyang.ac.kr',
    password: '1234',
    nickname: 'minij',
    thumbnail: 'https://korea-hack-dev.s3-ap-northeast-1.amazonaws.com/607f9f8a-b6d4-49ff-83ae-80fcc2596a06.jpeg',
}));

module.exports = router;
