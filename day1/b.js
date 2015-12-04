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

  var i = 0;
  var floor = 0;
  while(i < data.length && floor >= 0){
    floor += data[i] === '(' ? 1 : -1;

    i++;
  }

  console.log('The answer is: ' + i);
}
