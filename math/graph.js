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
  var elements = arr ? distinct(arr) : [];
  var exports = {};

  return exports;
};

CGraph = function() {
  var nodes = new Set();
  var edges = new Set();
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

  var connect = exports.connect = function(n1, n2) {
    return edges.push({ nodes: new Set([n1, n2]) });
  }

  return exports;
};

Node = function() {
  var exports = {};

  return exports;
};

