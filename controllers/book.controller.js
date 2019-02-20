const Book = require('../models/bookSchema');

exports.book_add = (req, res) =>  {
    var book = new BookModel(
        {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            published: req.body.published
        }
    );

    book.save().then((doc) => {
         res.send(doc);
        }, (err) => {
             res.status(400).send(err);
            });
};

// виніст в окремий файл, але не перевіряв чи працює