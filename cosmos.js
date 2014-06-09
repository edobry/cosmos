var nextPrime = function() {
	var sieve = [], i, j, primes = [];

}

var getPrimes = function (start, end) {
	var sieve = [], i, j, primes = [];
	for(i = start; i <= end; i++) {
		if(sieve[i]) // if has been marked prime
			continue;

		primes.push(i);
		for(j = i << 1; j <= end; j += i) {
			sieve[j] = true;
		}
	}
	return primes;
};

//console.log(getPrimes(20));

var db = (function() {
	var exports = {};
	var mem = [];
	var ids = [];

	var genId = exports.genId = (function() {
		var primes = [2], curr = 0, interval = 100;

		return function() {
			debugger;
			var out = primes[curr++];
			if(curr == primes.length) primes = getPrimes(out, out + interval);
			return out;
		}
	})();

	var insert = exports.insert = function(obj) {
		obj.id = genId();
	};

	return exports;	
})();

for(var i = 0; i < 100000; i++) {
	debugger;
	console.log(db.genId());
}