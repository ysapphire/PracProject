const express = require('express');
const router = express.Router();
var userModel = require('../../models/userSchema');
var ObjectID = require('mongodb').ObjectID;

router.get('/', (req, res) => {
    res.send('Welcome to the DELETE page');
});

router.delete('/', (req, res) => { 
    userModel.findOneAndDelete(req.params.id, function(err) {
        if (err) throw (err);
        res.send('Deleted');
    });
});

module.exports = router;