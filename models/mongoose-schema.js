var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    author: String,
    category: String,
    published: Date
})

module.exports = mongoose.model('Book', BookSchema);