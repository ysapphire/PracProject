const express = require('express');
const router = express.Router();
var userModel = require('../../models/userSchema');
var ObjectID = require('mongodb');



router.get('/', (req, res) => {
    userModel.findOne(req.params.id).then((users) => {
                 res.send(users);
    }, (err) => {
        res.status(400).send(err);
    });
});




// router.get('/', (req, res) => {
//     userModel.findById(req.param.id)
//     .then(user => {
//         if(!user) {
//             return res.status(404).send({
//                 message: 'User with this ID is not found'
//             });
//         }
//         res.send(user);
//     }).catch(err => {
//         if(err.kind === 'ObjectID') {
//             return res.status(404).send({
//                 message: 'Book with this ID is not found 2.0'
//             });
//         }
//         return res.status(500).send({
//             message: 'DYZHE NAVIT POGANO'
//         });
//     });
// });



module.exports = router; 