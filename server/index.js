var ws = require("nodejs-websocket")
var clients = {};

var server = ws.createServer(function (conn) {
    console.log("New connection")
    conn.on("text", function (text) {
        //do some logic here...
        let data = JSON.parse(text);
        if(data.type === 'LOGIN'){
            clients[data.payload] = conn;
            console.log(data.payload + ' just logged in!');
            return
        }

        if(data.type === 'MSG'){
            if(clients[data.payload.to]){
                console.log(data.payload.from + ' send message to ' + data.payload.to);
                clients[data.payload.to].send(text);
                return
            }
        }
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    });
    conn.on("error", function (code, reason) {
        console.log("Connection closed")
    });
}).listen(3000, function(){
  console.log('listening on *:3000');
});