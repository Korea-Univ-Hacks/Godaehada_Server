module.exports = {
  getList: require('./user-get-list.service').exec,
  getProfile: require('./user-get-profile.service').exec,
  createUser: require('./user-create.service').exec
};
