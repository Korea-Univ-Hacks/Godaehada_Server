module.exports = app => {
    app.use('/api/user', require('./api/user'));
};
