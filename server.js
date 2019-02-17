const express = require('express');
const app = express();
const fs = require('fs');
const port =  process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', () => {
    res.send('Home page/auth ');
});

app.get('/list', () => {
    res.send('List of books');
});
app.get('/about', () => {
    res.send('About page');
});

app.listen(port, () => {
    console.log('Server is working on port ' + port);
});