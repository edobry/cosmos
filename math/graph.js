distinct = function(arr) {
    var hash = {}, result = [];
    for(var i in arr) {
        if (!hash.hasOwnProperty(arr[i])) {
            hash[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result;
};

Set = function(arr) {
  return distinct(arr);
};

CGraph = function() {
  var nodes = [];
  var exports = {};

  // properties
  var n = exports.n = function() { return nodes.length; };

  var numEdges = exports.numEdges = function() {
    return (n()*(n()-1))/2;
  };

  var radius = exports.radius = function() {
    return (n() <= 1 ? 0 : 1);
  };

  var diameter = exports.diameter = radius;

  var girth = exports.girth = function() {
    return (n() <= 2 ? Infinity : 3);
  };

  var chromaticNumber = exports.chromaticNumber = n;

  var chromaticIndex = exports.chromaticIndex = function() {
    return (n() % 2 != 0 ? n() : n()-1);
  };

  var spectrum = exports.spectrum = function() {
    return Set([Math.pow((n()-1), 1), Math.pow(-1, n()-1)]);
  };

  // actions
  var addNode = exports.addNode = function(node) {
    return nodes.push(node);
  };

  return exports;
};

Node = function() {
  var exports = {};

  var connections = [];

  var connect = exports.connect = function(node) {
    return connections.push(node);
  };

  return exports;
};

