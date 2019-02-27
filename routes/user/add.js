const express = require('express');
const router = express.Router();
var userModel = require('../../models/userSchema');

router.get('/', (req, res) => {
    res.send('Welcome. Add user page');
});

router.post('/', (req, res) => {  
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

 module.exports = router;