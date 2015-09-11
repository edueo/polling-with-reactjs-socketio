var express = require('express');

var app = express();

var connections = [];
var title = 'Untitled Presentation';

app.use(express.static('./public'));

// bootstrap se for o caso
//app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {

	socket.once('disconnect', function() {
		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();
		console.log('Disconnected');
	});

	socket.emit('welcome', {
		title : title
	});
	
	connections.push(socket);	
	console.log(connections.length);

});
console.log('Pooling server is running');
