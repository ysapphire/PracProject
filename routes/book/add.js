const express = require('express');
const router = express.Router();
var Book = require('../../models/bookSchema');

router.get('/', (req, res) => {
    res.send('Welcome to the ADD page');
});

router.post('/', (req, res) => { 
    var book = new Book({
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

module.exports = router; 