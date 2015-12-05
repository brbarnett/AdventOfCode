var file = require('../core/fileLoader');
var _ = require('lodash');

module.exports = {
  run: run
}

function run(){
  file.load('./day3/input.txt')
    .then(function(data){
      processInput(data);
    });
}

function processInput (data){
  var santaData = [], roboData = [];
  
  for (var i = 0; i < data.length; i++) {
      if(i % 2 === 0) { // index is even
          santaData.push(data[i]);
      } else{
        roboData.push(data[i]);
      }
  }
  
  var houses = getHousesVisited(santaData).concat(getHousesVisited(roboData));
  
  var uniqueHouses = _.uniq(houses, false, function(item){
    return item.x + 'x' + item.y;
  });

  console.log('The answer is: ' + uniqueHouses.length);
}

function getHousesVisited(data){
  var houses = [];
  
  var x = 0, y = 0;
  var i = 0;
  do {
    houses.push({
      x: x,
      y: y
    });
    
    switch(data[i]){
      case '^':
      y++;
      break;
      case 'v':
      y--;
      break;
      case '<':
      x--;
      break;
      case '>':
      x++;
    }
    
    i++;
  }
  while(i < data.length);
  
  return houses;
}