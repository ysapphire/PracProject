const express = require('express');
const router = express.Router();
var Book = require('../../models/bookSchema');
var ObjectID = require('mongodb').ObjectID;

router.get('/', (req, res) => {
    res.send('Welcome to the DELETE page');
});

router.delete('/', (req, res) => { 
    Book.findOneAndDelete(req.params.id, function(err) {
        if (err) throw (err);
        res.send('Deleted');
    });
});

module.exports = router;