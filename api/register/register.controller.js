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
    registerMe(req, res) {
        const { params ={}, files = [] } = req;
        console.log(params, files);
        return Service.edit(params, files)
            .then((result) => responseWrapper(req.method, result, res))
            .catch((err) => errorWrapper(err.message, res));
    }
};
