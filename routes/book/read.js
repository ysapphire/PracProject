const express = require('express');
const router = express.Router();
var Book = require('../../models/bookSchema');

var listBooks = router.get('/', (req, res) => {
    Book.find({})
    .then((books) => {
        res.render('book/index.handlebars', {
            books: books
        });
        //res.send({book});
    }, (err) => {
        res.status(400).send(err);
    });
});

module.exports = listBooks;
module.exports = router; 

