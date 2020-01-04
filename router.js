module.exports = app => {
  app.use('/api/user', require('./api/user'));
  app.use('/api/register', require('./api/register'));
};
