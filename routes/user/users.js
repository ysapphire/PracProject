const express = require('express');
const router = express.Router();
var userModel = require('../../models/userSchema');

router.get('/', (req, res) => {
     userModel.find().then((users) => {
                  res.send({users});
     }, (err) => {
         res.status(400).send(err);
     });
});

module.exports = router; 