const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const {ObjectID} = require('mongodb');

//імпортую монгус і схему
var {mongoose} = require('./models/mongoose');
var {bookModel} = require('./models/bookSchema');
var {userModel} = require('./models/userSchema');

mongoose.Promise = global.Promise; // це ж для подальшого використання .then() ?

const app = express();
const port =  process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Home page/auth ');
});

app.post('/list', (req, res) => {  //перевіряв як працювати з Postman 
    var book = new bookModel({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        published: req.body.published
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

app.post('/users', (req, res) => {  //перевіряв як працювати з Postman 
    var user = new userModel({
       name: req.body.name,
       email: req.body.email,
       password: req.body.password
    });
    user.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/users', (req, res) => {
    userModel.find().then((users) => {
        res.send({users});
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