const multerS3 = require('multer-s3');
const uuidv4 = require('uuid/v4');
const multer = require('multer');
const S3 = require('../middleware/aws');

const multerUpload = multer({
    storage: multerS3({
        s3: S3,
        bucket: process.env.OS_BUCKET_NAME,
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            const [type, format] = file.originalname.split('.');
            const nameUuid = uuidv4();
            const customFileName = `${nameUuid}.${format}`;
            console.log(customFileName);
            cb(null, customFileName);
        },
        acl: 'public-read',
    }),
}).array('myFile', 10);

module.exports = multerUpload;
