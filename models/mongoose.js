const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://user:root@dbfornode-y0olc.gcp.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });

module.exports = {mongoose};