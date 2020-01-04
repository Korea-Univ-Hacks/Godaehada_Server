const Service = require('../posts/service');

const { responseWrapper } = require('../../component/response');
const { errorWrapper } = require('../../component/error');

module.exports = {
    postList(req, res) {
        const { query } = req;

        return Service.list(query)
            .then(responseWrapper(res))
            .catch(errorWrapper(res));
    },
}
