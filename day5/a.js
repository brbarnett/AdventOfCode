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
    
    if(isNice) nice++;  
  } 
  
  console.log(nice);
}

var vowels = 'aeiou';
function testString(string){
  // test if 3 vowels
  if(_.intersection(string, vowels).length < 3) return false;
  
  // test repeating char
  if((string.match(/([a-zA-Z]).*(\1)/) || []).length <= 0) return false;
  
  // test for illegal substring
  if(string.indexOf('ab') >= 0) return false;
  if(string.indexOf('cd') >= 0) return false;
  if(string.indexOf('pq') >= 0) return false;
  if(string.indexOf('xy') >= 0) return false;
  
  return true;
}