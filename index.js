var path = require('path');
var express = require('express');

var routes = require('./routes');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(80);
console.log('Listening on 80');
