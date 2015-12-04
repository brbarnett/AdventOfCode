var file = require('../core/fileLoader');

module.exports = {
  run: run
}

function run(){
  file.load('./day2/input.txt')
    .then(function(data){
      processInput(data);
    });
}

function processInput (data){
  var boxes = data.split('\n');

  var feet = 0;
  boxes.forEach(function(box){
    var dim = box.split('x');
    if(dim.length !== 3) return;

    feet += getRibbonFeet(dim.map(function(side){
      return parseInt(side);
    }));
  });

  console.log('The answer is: ' + feet);
}

function getRibbonFeet(sides){
  sides.sort(function(a, b){
    return parseInt(a) > parseInt(b) ? 1 : -1;
  });

  return 2*sides[0] + 2*sides[1] + sides.reduce(function(a, b){ return a * b; });
};
