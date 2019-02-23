const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const {ObjectID} = require('mongodb');

var {mongoose} = require('./models/mongoose');
var {bookModel} = require('./models/bookSchema');
var {userModel} = require('./models/userSchema');

var listRouter = require('./routes/list');
var homeRouter = require('./routes/home');
var aboutRouter = require('./routes/about');
var addRouter = require('./routes/add');
var usersRouter = require('./routes/users');

mongoose.Promise = global.Promise; // це ж для подальшого використання .then() ?

const app = express();
const port =  process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', homeRouter);
app.use('/list', listRouter);
app.use('/add', addRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);

app.listen(port, (req, res) => {
    console.log('Server is working on port ' + port);
});