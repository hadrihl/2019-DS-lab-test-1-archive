var http = require('http').Server();
var port = 22222;

// include SocketIO library
var io = require('socket.io')(http);

http.listen(port, function() {
	console.log("server is listening on :" + port);
});

// upon successful connection,
io.on('connect', function(socket) {
	console.log("client" + "<" + socket.id + "> is connected.");

	// send message
	socket.emit('msg1', "This is message 2");

	// upon disconnection,
	socket.on('disconnect', function() {
		console.log("client " + "<" + socket.id + "> is disconnected.");
	});
});


 var socket2 = require('socket.io-client')('http://localhost:11111');
     socket2.on('connect',function(){
     socket2.emit('msg3', "srv 1 now is conneted to srv 2");


});
//socket.on('event',function(data){});
//socket.on('disconnect',function(){});
