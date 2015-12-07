var file = require('../core/fileLoader');
var _ = require('lodash');

module.exports = {
  run: run
}

function run(){
  file.load('./day5/input.txt')
    .then(function(data){
      processInput(data);
    });
}

function processInput (data){
  var strings = data.split('\n');

  var nice = 0;
  for(var i = 0; i < strings.length; i++){
    var isNice = testString(strings[i]);
    
    if(isNice === true) nice++;  
  }
  
  console.log(nice);
}

function testString(string){
  if(string.length <= 0) return false;
  
  var matches = 0;
  
  // test repeats twice no overlap
  matches = (string.match(/(.{2}).*(\1)/gi) || []).length;
  if(matches <= 0) return false;
  
  // test letter repeats as x[*]x
  matches = (string.match(/(.).{1}(\1)/) || []).length;
  if(matches <= 0) return false;
  
  return true;
}