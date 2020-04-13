const io = require('socket.io-client');
const server = require('../config.json');
const socket = io.connect('http://localhost:'+server.port);

socket.on('connect', function() {
  console.log("connected");
  console.log(socket.id);
});
