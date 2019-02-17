const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Books', (err, db) => {
    if (err) throw err;
    console.log('Connected to db');
})