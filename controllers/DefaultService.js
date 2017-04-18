'use strict';

exports.personsGET = function(args, res, next) {
  /**
   * Gets `Person` objects. Optional query param of **size** determines size of returned array 
   *
   * size Double Size of array
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "name" : "Mikkel Arentoft",
  "status" : "alive"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

