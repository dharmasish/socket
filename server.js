
var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'))
console.log("my server is running");

var socket = require('socket.io');
var io = socket(server);

app.get('/', function (request, response) {
   response.sendfile('index.html');
   		console.log('got new');
      console.log(request.ip);
});


console.log('server working')
io.sockets.on('connection',function newConnection(socket) {
	console.log('new connection ');
	console.log(socket)
}	)