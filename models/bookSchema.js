const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: String,
    published: Number
});

var Book = mongoose.model('books', bookSchema);

console.log('Feels like everything is OK in book schema');

module.exports = Book;
