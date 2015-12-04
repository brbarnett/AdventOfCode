var file = require('../core/fileLoader');

module.exports = {
  run: run
}

function run(){
  file.load('./day1/input.txt')
    .then(function(data){
      processInput(data);
    });
}

function processInput (data){
  var answer = (data.match(/\(/g) || []).length - (data.match(/\)/g) || []).length;

  console.log('The answer is: ' + answer);
}
