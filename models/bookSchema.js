const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    published: Number
});

var bookModel = mongoose.model('Book', bookSchema);

console.log('Feels like everything is OK');

module.exports = {bookModel};


