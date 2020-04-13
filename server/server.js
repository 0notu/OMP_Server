process.on('error', console.log);
const config = require("./config.json");

const server = require('http').createServer();
const io = require('socket.io')(server);

// internal checks
const database = require('./src/databaseOps/commandCenter.js');
const fiveO = require('./src/security/precinct.js');

// namespaces
const update = io.of('/update');
// /namespaces

io.on('connection', (socket) => {

  var user = {
    id: socket.id,
    name: "test"
  }

  console.log('a user connected: ', user.name);

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

  io.on('disconnect', function() {
    return;
    // forward to another online server
  });
});

server.listen(config.port, function() {
  console.log("Server is online\nRAAWAWWWAR");
});
