var express = require('express'),
	bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json()); //parse any data coming from request into server



var users = []
var messages = [];


app.options('/', function (req, res, next) {
	
	res.status(200).set({
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		'X-XSS-Protection': '1; mode=block',
		'X-Frame-Options': 'SAMEORIGIN',
		'Content-Security-Policy': "default-src 'self' devmountain.github.io"
	}).send()
})

app.get('/', function (req, res, next) {
	res.status(200).set({
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		'X-XSS-Protection': '1; mode=block',
		'X-Frame-Options': 'SAMEORIGIN',
		'Content-Security-Policy': "default-src 'self' devmountain.github.io"
	}).send(JSON.stringify(messages));
	console.log('YOU GOT MESSAGES')
})

app.post('/', function (req, res, next) {
	console.log(req.body);
	messages.push({
		username: req.body.username,
		img: 'images/timbers-logo.jpg',
		message: req.body.message,
		time: new Date()
	})

	res.status(200).set({
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		'X-XSS-Protection': '1; mode=block',
		'X-Frame-Options': 'SAMEORIGIN',
		'Content-Security-Policy': "default-src 'self' devmountain.github.io"
	}).send(JSON.stringify(messages));
	console.log(messages);
})


//SET UP PORT//
var port = process.env.PORT || 3000;

app.listen(port, function () {
	console.log('Listening on port ' + port);
});