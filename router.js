module.exports = (app) => {
    app.use('/api/posts', require('./api/posts'));
    app.use('/api/register', require('./api/register'));
};
