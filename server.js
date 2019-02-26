const express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    MongoClient = require('mongodb').MongoClient;
    ObjectID = require('mongodb');
    mongoose = require('mongoose');

var mongoose = require('./models/mongoose'),
    Book = require('./models/bookSchema'),
    userModel = require('./models/userSchema');

var listRouter = require('./routes/book/read'),
    listByIdRouter = require('./routes/book/readById'),
    homeRouter = require('./routes/home'),
    aboutRouter = require('./routes/about'),
    addRouter = require('./routes/book/add'),
    deleteRouter = require('./routes/book/delete');
    updateRouter = require('./routes/book/update');
    usersRouter = require('./routes/user/users');

mongoose.Promise = global.Promise; 

const app = express();
const port =  process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use('/', homeRouter);
app.use('/list', listRouter);
app.use('/list/add', addRouter);
app.use('/list/:id', listByIdRouter);
app.use('/list/:id/delete', deleteRouter);
app.use('/list/:id/update', updateRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);

app.listen(port, (req, res) => {
    console.log('Server is working on port ',  port);
});