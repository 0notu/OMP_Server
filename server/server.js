process.on('error', console.log);


module.exports.Server = class {
  constructor (config) {
    this.config = config;
    this.server = require('http').createServer();
    this.io = require('socket.io')(this.server);
    // external packages b/c I'm too lazy to add the functionality on my own
    this.uuid = require('uuid');

    // server stats
    this.stats = {
      user_count: 0
    }
  };

  _createGame() { // adding/creating a new game 'room'
    this.details = {
      name: "",
      id: "",
      game_mode: "",
      parties: { // party id + amount of players in said party (not nesscarly those who are in the game 'room')

      },
      private: { // all boss damage, loot drops, etc. (check frameworks for each boss's details)

      }
    }

    this.details.id = (async() => {await uuid.v4()}); // 'room''s guid
    // append to database here
  }

  _searchForGame() { // search based on ping, party, etc.
    return; // for now
  }

  _joinGame() { // join an existing, but not yet started game
    return; // for nows
  }

  _leaveGame() { // leave a game (the server auto calls this for everyone once it's finished)
    return; // for now
  }

  _init() {
    this.io.on('connection', (socket) => {

      this.stats.user_count += 1;

      var user = {
        id: socket.id
      };

      socket.on('disconnect', function() {
        this.stats.user_count -= 1;
        console.log('user disconnected');
      });

      this.io.on('disconnect', function() {
        this.server.close();
        return;
        // forward to another online server
      });
    });
  }

  start () {
    this._init();
    this.server.listen(this.config.port, function() {
      console.log("Server is online\nRAAWAWWWAR");
    });
  }

}
