const { responseWrapper } = require('../../component/response');
const { errorWrapper } = require('../../component/error');

const service = require('./service');

module.exports = {
  getUserList(req, res) {
    const { query = {}} = req;

    return service.getList(query)
      .then(result => responseWrapper(req.method, result, res))
      .catch(err => errorWrapper(err.message, res));
  },
  getUserProfile(req, res) {
    const { params } = req;
    return service.getProfile(params)
      .then(result => responseWrapper(req.method, result, res))
      .catch(err => errorWrapper(err.message, res));
  },
  createUser(req, res) {
    const { body } = req;
    return service.createUser(body)
      .then(result => responseWrapper(req.method, result, res))
      .catch(err => errorWrapper(err.message, res));
  },
};
