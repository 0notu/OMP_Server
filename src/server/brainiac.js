// internal checks
const database = require('../src/databaseOps/commandCenter.js');
const fiveO = require('../src/security/precinct.js');
const config = require('./config.json');
const { Server } = require('./server.js');

var myServer = new Server(config);

myServer.start();
