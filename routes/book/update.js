const express = require('express');
const router = express.Router();
var Book = require('../../models/bookSchema');

router.get('/', (req, res) => {
    Book.findOne({
        _id: req.params.id
    })
    .then((book) => {
        book.title = req.body.title,
        book.author = req.body.title,
        book.genre = req.body.genre,
        book.published = req.body.published;

        book.save().then(book => {
            res.redirect('/list');
        })
    }, (err) => {
        res.status(400).send(err);
    });
});


module.exports = router; 

