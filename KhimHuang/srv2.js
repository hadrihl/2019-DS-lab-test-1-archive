var http = require('http').Server();
var port = 44444;

// include SocketIO library
var io = require('socket.io')(http);

http.listen(port, function() {
	console.log("server is listening on :" + port);
});

// upon successful connection,
io.on('connect', function(socket) {
	console.log("client" + "<" + socket.id + "> is connected.");

	// send message
	

	socket.on('msg1',function(data) {
		console.log(data);
	});

	socket.on('msg3',function(data){
		console.log(data);
	});


	// upon disconnection,
	socket.on('disconnect', function() {
		console.log("client " + "<" + socket.id + "> is disconnected.");
	});
});

var socket1 = require ('socket.io-client')('http://localhost:33333');

socket1.on('connect',function(){
	socket1.emit('msg2', "This is message 2");
	
});

socket1.on('event',function(data){});
socket1.on('disconnect',function(){});