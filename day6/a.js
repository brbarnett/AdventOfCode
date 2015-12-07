var file = require('../core/fileLoader');
var _ = require('lodash');

module.exports = {
  run: run
}

function run(){
  file.load('./day6/input.txt')
    .then(function(data){
      processInput(data);
    });
}

function processInput (data){
  var instructions = data.split('\n');
  
  // fill in default grid
  var grid = _.fill(new Array(1000), _.fill(new Array(1000), false, 0, 1000), 0, 1000);
  
  for(var i = 0; i < instructions.length; i++){
    
  }
  
  console.log(grid);
}

function parseInstruction (instruction){
  var coordinates = instruction.match(/(\d*,\d*)/gi);
  
};