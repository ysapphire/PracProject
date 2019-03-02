const express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    MongoClient = require('mongodb').MongoClient;
    ObjectID = require('mongodb');
    mongoose = require('mongoose'),
    exphbs  = require('express-handlebars');
    
var mongoose = require('./models/mongoose'),
    Book = require('./models/bookSchema'),
    userModel = require('./models/userSchema');

var listRouter = require('./routes/book/read'),
    homeRouter = require('./routes/home'),
    aboutRouter = require('./routes/about'),
    addRouter = require('./routes/book/add'),
    deleteRouter = require('./routes/book/delete');
    updateRouter = require('./routes/book/update');
    usersRouter = require('./routes/user/users');
    userAddRouter = require('./routes/user/add');
    userDeleteRouter = require('./routes/user/delete');
    oneUserRouter = require('./routes/user/readOne');

mongoose.Promise = global.Promise; 

const app = express();
const port =  process.env.PORT || 3000;

app.use(methodOverride('_method'));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', homeRouter);
app.use('/list', listRouter);
app.use('/list/add', addRouter);
// app.use('/list/:id', deleteRouter);
app.use('/list/:id', updateRouter);
app.use('/users', usersRouter);
app.use('/users/add', userAddRouter);
app.use('/users/:id', userDeleteRouter);
app.use('/users/:id', oneUserRouter);
app.use('/about', aboutRouter);


app.listen(port, (req, res) => {
    console.log('Server is working on port ',  port);
});