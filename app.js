require('dotenv').config();
const express = require('express');
const connect = require('./model');

const app = express();

require('./router')(app);

connect();

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(app.get('port'), () => {
    console.log(`Successfully Server Connection || PORT :: ${app.get('port')}`);
});

module.exports = app;
