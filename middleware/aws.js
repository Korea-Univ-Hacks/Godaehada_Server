// const AWS = require('aws-sdk');
const AWS = require('aws-sdk');

const accessKey = process.env.OS_ACCESS_KEY;
const secretKey = process.env.OS_SECRET_KEY;
console.log(accessKey, secretKey);
const config = {
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
};

const S3 = new AWS.S3(config);

module.exports = S3;
