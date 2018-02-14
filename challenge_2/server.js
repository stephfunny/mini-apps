var express = require('express')


var morgan = require('morgan');
var parser = require('body-parser');

//router require
var router = require('./router.js')

var app = express();
module.exports.app = app; // why is this necessary?

app.set('port', 7000);


app.use(morgan('dev'));
app.use(parser.json());

//router use
app.use(express.static(__dirname + '/client'));
app.use('/', router);



//app.get('/', )

app.listen(app.get('port')); // is this necessary?
console.log('Listening on', app.get('port'));

