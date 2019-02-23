const express = require('express');
const router = express.Router();
var {bookModel} = require('../models/bookSchema');

router.post('/', (req, res) => {  //перевіряв як працювати з Postman 
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

router.get('/', (req, res) => {
    bookModel.find().then((books) => {
        res.send({books});
    }, (err) => {
        res.status(400).send(err);
    });
});

module.exports = router; 

