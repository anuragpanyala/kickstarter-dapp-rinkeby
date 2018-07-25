const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
var db = require('../database/db');
const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    db = database.db("notes-app")
    require('./routes')(app, db);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});