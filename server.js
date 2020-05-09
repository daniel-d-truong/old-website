var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/resume.html'));
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/error.html'));
});

app.listen(process.env.PORT || 8000);