const express = require('express');
const router = express.Router();
var Book = require('../../models/bookSchema');
var ObjectID = require('mongodb');


// router.get('/', (req, res) => {
//     res.send('Welcome to the READ-ONE page');
// });

router.get('/', (req, res) => {
    Book.findOne(req.params.id)
    .then(book => {
        if(!book) {
            return res.status(404).send('Something wrong');
        }
        res.send(book);
    }).catch(err => {
        if(err.kind === 'ObjectID') {
            return res.status(404).send('Something wrong #2');
        }
        return res.status(500).send({
            message: 'DYZHE NAVIT POGANO'
        });
    });
});



module.exports = router; 