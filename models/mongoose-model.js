var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Books');

var Book = mongoose.model('Book', {
    title:{
        type: String
    },
    author:{
        type: String
    },
    genre:{
        type: String
    },
    published:{
        type: Date
    }
});

var newBook = new Book({
    title: 'The Witcher: The Last Wish',
    author: 'Andrjei Sapkowski',
    genre: 'Fantasy',
    published: 1993
});

newBook.save().then((doc) => {
 console.log('Saved new book in list: ', doc);
}, (err) => {
    console.log('Something wrong', err);    
});