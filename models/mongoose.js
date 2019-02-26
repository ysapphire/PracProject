const mongoose = require('mongoose');

// змінив підключення
// тепер БД лежить на хмарі Mongo Atlas

mongoose.connect("mongodb+srv://user:root@dbfornode-y0olc.gcp.mongodb.net/Books?retryWrites=true", { useNewUrlParser: true });

module.exports = mongoose;