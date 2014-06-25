var exports = {};

var Node = exports.Node = (function(){
	return function(_id, _value, _connections) {
		var id = _id, value = _value, connections =  _connections ? _connections : [];
		var exports = {};

		exports.id = id;
		exports.value = value;
		exports.connections = connections;

		var addConnection = exports.addConnection = function(node) {
			connections.push(node);
		};

		return exports;
	};
})();

var Graph =  exports.Graph = (function(){
	return function(_nodes) {
		var nodes = _nodes ? _nodes : [];
		var exports = {};

		exports.nodes = nodes;

		var addNode = exports.addNode = function(node) {
			debugger;
			nodes.push(node);
		};

		return exports;
	};
})();

//module.exports = exports;

window.Graph = exports;