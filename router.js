module.exports = app => {
    app.use('/posts', require('./api/posts'));
}