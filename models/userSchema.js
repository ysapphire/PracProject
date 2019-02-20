const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

var userModel = mongoose.model('User', userSchema);

console.log('Feels like everything is OK');

module.exports = {userModel};