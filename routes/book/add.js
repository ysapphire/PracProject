const express = require('express');
const router = express.Router();
var Book = require('../../models/bookSchema');

router.get('/', (req, res) => {
    res.render('book/add.handlebars');
});

router.post('/', (req, res) => { 
    var book = new Book({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        published: req.body.published
    });
    book.save().then((books) => {
        res.redirect('/list');
        //res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

module.exports = router; 