const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

var {mongoose} = require('./models/mongoose');
var {bookModel} = require('./models/bookSchema');

const app = express();
const port =  process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Home page/auth ');
});

app.post('/list', (req, res) => {
    var book = new bookModel({
        title: req.body.title
    });
    book.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/list', (req, res) => {
    bookModel.find().then((books) => {
        res.send({books});
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.listen(port, (req, res) => {
    console.log('Server is working on port ' + port);
});