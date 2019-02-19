const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb+srv://user:root@dbfornode-y0olc.gcp.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }, (err, client) => {
    if (err) throw err;
    console.log('Connected to db');


    var db = client.db('Books');
    db.collection('Books').insertOne({
        title: 'The Devil in the White city',
        author: 'Erik Larson',
        genre: 'History',
        published: 2003
    }, (err, result) => {
        if (err) {
            console.log('Wrong ', err);            
        }
        console.log(result.ops);
    
    });

    client.close();

});