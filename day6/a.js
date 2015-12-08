var file = require('../core/fileLoader');
var _ = require('lodash');

module.exports = {
  run: run
}

function run() {
  file.load('./day6/input.txt')
    .then(function (data) {
      processInput(data);
    });
}

function processInput(data) {
  var instructions = data.split('\n');
  
  // fill in default grid, all lights off
  var grid = _.fill(new Array(1000), _.fill(new Array(1000), false, 0, 1000), 0, 1000);

  for (var i = 0; i < instructions.length; i++) {
    var instruction = parseInstruction(instructions[i]);
    
    //console.log(instruction);
    //console.log((instruction.end.x - instruction.start.x + 1)*(instruction.end.y - instruction.start.y + 1));

    // process subgrid
    for (var x = instruction.start.x; x <= instruction.end.x; x++) {
      for (var y = instruction.start.y; y <= instruction.end.y; y++) {
        var value = instruction.operate(grid[x][y]);
        grid[x][y] = value;
      }
    }
  }

  var lights = getNumberOfLights(grid);

  console.log('The answer is: ' + lights);
}

function parseInstruction(instruction) {
  var coordinates = instruction.match(/(\d*,\d*)/gi);
  if (coordinates.length < 2) throw 'Bad coordinates';

  var operate = null;
  if (_.startsWith(instruction, 'toggle')) operate = function toggle(x) { return !x; };
  if (_.startsWith(instruction, 'turn on')) operate = function turnOn(x) { return true; };
  if (_.startsWith(instruction, 'turn off')) operate = function turnOff(x) { return false; };

  var start = coordinates[0].split(',');
  var end = coordinates[1].split(',');

  var parsedInstruction = {
    operate: operate,
    start: {
      x: parseInt(start[0]),
      y: parseInt(start[1])
    },
    end: {
      x: parseInt(end[0]),
      y: parseInt(end[1])
    }
  };
  if (parsedInstruction.operate === null) throw 'Bad instruction';
  if (parsedInstruction.start.x > parsedInstruction.end.x) throw 'Out of bounds';
  if (parsedInstruction.start.y > parsedInstruction.end.y) throw 'Out of bounds';

  return parsedInstruction;
}

function getNumberOfLights(grid) {
  var lights = _.flatten(grid, false);

  return lights.filter(function (item) {
    return item === true;
  }).length;
}