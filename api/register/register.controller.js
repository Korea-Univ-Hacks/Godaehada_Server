const Service = require('../register/service');

const { responseWrapper } = require('../../component/response');
const { errorWrapper } = require('../../component/error');

module.exports = {
    registerSellor(req, res) {
        console.log('im here');
        console.log(req.params);
        console.log(req);
        // return Service.list(query)
        //     .then((result) => responseWrapper(req.method, result, res))
        //     .catch((err) => errorWrapper(err.message, res));
    },
};
