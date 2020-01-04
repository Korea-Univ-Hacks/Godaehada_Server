const Service = require('../posts/service');

const { responseWrapper } = require('../../component/response');
const { errorWrapper } = require('../../component/error');

module.exports = {
    postList(req, res) {
        const { query } = req;

        return Service.list(query)
            .then((result) => responseWrapper(req.method, result, res))
            .catch((err) => errorWrapper(err.message, res));
    },
};
