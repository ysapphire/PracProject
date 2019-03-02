const express = require('express');
const router = express.Router();
var Book = require('../../models/bookSchema');
var ObjectID = require('mongodb').ObjectID;

router.delete('/', (req, res) => { 
    Book.findOneAndDelete(req.params.id, function(err) {
        if (err) throw (err);
        res.redirect('/list');
    });
});

module.exports = router;