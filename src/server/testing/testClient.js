const io = require('socket.io-client');
const server = require('../config.json');
const socket = io.connect(server.url+":"+server.port);

socket.on('connect', function() {
  // ToDo: send along a test join query
  console.log("connected");
  console.log(socket.id);
});
