const User = require('../../../model/user');

const exec = async (body) => {
  return User.create(body);
};

module.exports = {
  exec
};
