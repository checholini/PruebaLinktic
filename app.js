var express = require('express')
var bodyparser = require('body-parser') 
var routes = require('./routes/mainRoute')

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use('/', routes)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

module.exports = app;