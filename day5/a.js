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

var v = 'aeiou';
function testString(string){
  if(string.length <= 0) return false;
  
  // test if 3 vowels
  var vowels = (string.match(/[aeiou]/gi) || []).length;
  //var vowels = _.intersection(string, v).length;
  if(vowels < 3) return false;
  
  // test repeating char
  var matches = (string.match(/(.)\1/) || []).length;
  if(matches <= 0) return false;
  
  // test for illegal substring
  if(string.indexOf('ab') >= 0) return false;
  if(string.indexOf('cd') >= 0) return false;
  if(string.indexOf('pq') >= 0) return false;
  if(string.indexOf('xy') >= 0) return false;
  
  return true;
}