const expres = require('express');

const router = expres.Router();

const controller = require('./register.controller');
const multerUpload = require('../../middleware/multer');

router.post('/:userId', multerUpload, controller.registerPortfolio);

module.exports = router;
