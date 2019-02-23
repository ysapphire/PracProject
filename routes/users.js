const express = require('express');
const router = express.Router();
var {userModel} = require('../models/userSchema');

router.post('/', (req, res) => {  //перевіряв як працювати з Postman 
   var user = new userModel({
       name: req.body.name,
        email: req.body.email,
       password: req.body.password
     });
     user.save().then((doc) => {
         res.send(doc);
     }, (err) => {
         res.status(400).send(err);
     });
});

 router.get('/', (req, res) => {
     userModel.find().then((users) => {
                  res.send({users});
     }, (err) => {
         res.status(400).send(err);
     });
});
module.exports = router; 