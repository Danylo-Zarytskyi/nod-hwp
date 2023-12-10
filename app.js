const express = require('express');
const path = require('path');
const createError = require('http-errors');
const randomInt = require('./routes/rInt');
const randomIntList = require('./routes/rIntList')

const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use('/public', express.static(path.join(__dirname, 'style')));

server.get('/game', (req, res) => {
    const rIntValue = randomInt(1, 10);
    const rIntListValue = randomIntList(1, 10);
    res.render('index', { rIntValue, rIntListValue });
})

server.use((req, res, next) => {
    next(createError(404));
});

server.use((err, req, res, next) => {
    const code = err.status || 500;

    res.status(code);
    res.end(`Error: ${code}`);
    console.error(err);  
});


server.listen(3000);