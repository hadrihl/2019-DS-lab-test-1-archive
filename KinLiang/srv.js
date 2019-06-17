var http = require('http').Server();
var port = 11111;

// include SocketIO library
var io = require('socket.io')(http);

http.listen(port, function() {
	console.log("server is listening on :" + port);
});

// upon successful connection,
io.on('connect', function(socket) {
	console.log("client" + "<" + socket.id + "> is connected.");

	// send message
	socket.emit('msg3', "This is message 1");

	//receive from srv 2
	socket.on('msg3',function(data){
    console.log(data);
	});

	// upon disconnection,
	socket.on('disconnect', function() {
		console.log("client " + "<" + socket.id + "> is disconnected.");
	});

	var socket2 = require('socket.io-client')('http://localhost:22222');
});