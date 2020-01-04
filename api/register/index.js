const expres = require('express');

const router = expres.Router();
const User = require('../../model/user');
const controller = require('./register.controller');
const multerUpload = require('../../middleware/multer');

router.post('/:userId', multerUpload, controller.registerPortfolio);

router.post('/me/:userId', multerUpload, controller.registerMe);

router.get('/test', async () => User.create({
    email: 'jominjimail@hanyang.ac.kr',
    password: '1234',
    nickname: 'minij',
    description: '설명',
}));
module.exports = router;
