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
	
	socket.on('msg', function(data) {
		console.log("Server 2 receive msg:" + data);
	});
	socket.emit('msg', "This is message 2");
	// upon disconnection,
	socket.on('disconnect', function() {
		console.log("client " + "<" + socket.id + "> is disconnected.");
	});
});

