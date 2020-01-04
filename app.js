require('dotenv').config();

const express = require('express');

const app = express();

require('./router')(app);

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(app.get('port'), () => {
    console.log(`Successfully Server Connection || PORT :: ${app.get('port')}`);
});

module.exports = app;