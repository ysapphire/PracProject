const express = require('express');
const router = express.Router();
var Book = require('../../models/bookSchema');

router.get('/', (req, res) => {
    Book.find()
    .then((book) => {
        res.send({book});
    }, (err) => {
        res.status(400).send(err);
    });
});


module.exports = router; 

