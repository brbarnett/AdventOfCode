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

    feet += getBoxFeet(dim[0], dim[1], dim[2]);
  });

  console.log('The answer is: ' + feet);
}

function getBoxFeet(l, w, h){
  var sides = [l*w, w*h, h*l];
  
  return 2*sides[0] + 2*sides[1] + 2*sides[2] + Math.min.apply(null, sides);
};
