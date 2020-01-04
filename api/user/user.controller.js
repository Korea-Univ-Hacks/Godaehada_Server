const { responseWrapper } = require('../../component/response');
const { errorWrapper } = require('../../component/error');

const service = require('./service');

module.exports = {
  getUserList(req, res) {

    return service.getList()
      .then(result => responseWrapper(req.method, result, res))
      .catch(err => errorWrapper(err.message, res));
  },
  getUserProfile(req, res) {
    const { query } = req;
    return service.getProfile(query)
      .then(responseWrapper(res))
      .catch(errorWrapper(res));
  },
};
