const crypto = require('crypto');

function anotherInsecurePassword() {
  // Use cryptographically secure randomness for password suffix
  var suffix = crypto.randomBytes(8).toString('hex');
  var password = "sssAAAA" + suffix;
  return password;
}