const Service = require('../register/service');

const { responseWrapper } = require('../../component/response');
const { errorWrapper } = require('../../component/error');

module.exports = {
    registerPortfolio(req, res) {
        const { params = {}, files = [], body } = req;

        return Service.create(params, files, body)
            .then((result) => responseWrapper(req.method, result, res))
            .catch((err) => errorWrapper(err.message, res));
    },
};
