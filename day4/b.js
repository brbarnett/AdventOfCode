var secret = 'iwrupvqb';
var crypto = require('../core/md5');

module.exports = {
  run: run
}

function run(){
  var hex;
  
  var i = 0;
  do {
    hex = getHex(i);
    
    i++;
  }
  while(hex.substring(0, 6) !== '000000');
  
  console.log(i - 1);
}

function getHex(input){
  var hash = crypto.CryptoJS.MD5(secret + input);
  var hex = hash.toString(crypto.CryptoJS.enc.Hex);
  
  return hex;
}