const express = require('express');
const router = express.Router();
var Book = require('../../models/bookSchema');
var ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');

router.delete('/', (req, res) => { 
    Book.findOneAndDelete(req.params.id)
    .then(() => {
        res.redirect('/list');
    }) 
});

module.exports = router;