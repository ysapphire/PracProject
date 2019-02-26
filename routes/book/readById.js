const express = require('express');
const router = express.Router();
var Book = require('../../models/bookSchema');
var ObjectID = require('mongodb');

// router.get('/', (req, res) => {
//     res.send('Welcome to the READ-ONE page');
// });

router.get('/', (req, res) => {
    Book.findById(req.params.id).then(book => res.send(Book));
});



module.exports = router; 