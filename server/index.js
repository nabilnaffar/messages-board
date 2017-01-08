// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// var clients = {};

// io.on('connect', function(socket){
//   console.log('a user connected', socket.username);
//   clients[socket.username] = socket;

//   socket.on('send', function(msg){
//     console.log('message: ' + msg);
//     clients[msg.to].emit('new-message', msg);
//   });


//   socket.on('disconnect', function(){
//     console.log('user disconnected', socket.username);
//     delete clients[socket.username]
//   });
// });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

var ws = require("nodejs-websocket")
var clients = {};

var server = ws.createServer(function (conn) {
    console.log("New connection", conn)
    conn.on("sendMsg", function (str) {
        //do some logic here...
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    });
}).listen(3000, function(){
  console.log('listening on *:3000');
});