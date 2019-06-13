var http = require('http').Server();
var port = 33333;
var data1;
// include SocketIO library
var io = require('socket.io')(http);

http.listen(port, function() {
	console.log("server is listening on :" + port);
});

// upon successful connection,
io.on('connect', function(socket) {
	console.log("client" + "<" + socket.id + "> is connected.");

	// send message
	socket.emit('msg', data1);

	// upon disconnection,
	socket.on('disconnect', function() {
		console.log("client " + "<" + socket.id + "> is disconnected.");
	});
	socket.on('msg', function(data) {
		console.log(" Server1 receive msg:" + data);
	});
});

var socket1 = require('socket.io-client')('http://localhost:44444');
socket1.on('connect', function(){
	console.log("This is server2--CONNECTED");
});
socket1.on('msg', function(data) {
		console.log(" msg:" + data);
		data1 = data;
	});
	socket1.emit('msg', "This is message 1");
socket1.on('event', function(data){});
socket1.on('disconnect', function(){});
