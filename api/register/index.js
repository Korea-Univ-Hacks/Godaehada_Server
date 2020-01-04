const expres = require('express');

const router = expres.Router();

const controller = require('./register.controller');
const multerUpload = require('../../middleware/multer');

router.post('/:seller', multerUpload, controller.registerSellor);

module.exports = router;
