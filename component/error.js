const _ = require('lodash');

const errorWrapper = (err, res) => {
    let statusCode = 400;

    if (_.includes(err.message, '404') === true) {
        statusCode = 404;
    }

    res.status(statusCode).json(err.message);
};

module.exports = {
    errorWrapper,
};
