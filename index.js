const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 1337;

const config = require('./db');
const AppRoute = require('./routes/app.route');


mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/app', AppRoute);

app.listen(PORT, () => {
    console.log('Server is running on PORT:',PORT);
});

