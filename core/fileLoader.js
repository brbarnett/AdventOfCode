var fs = require('fs');
var Promise = require('node-promise');

module.exports = {
  load: load
};

function load(path){
  var promise = Promise.Promise();

  fs.readFile(path, 'utf8', function (err,data) {
    promise.resolve(data);
  });

  return promise;
}
