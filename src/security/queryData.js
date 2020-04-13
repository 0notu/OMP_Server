const crypto = require('crypto');

module.exports.run = function(data, socket_id) {
  console.log("under construction");
  const secret = 'abcdefg';
  const hash = crypto.createHmac('sha256', data);
  hash.digest('hex');
}
