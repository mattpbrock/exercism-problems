

var Hamming = function () {};

Hamming.prototype.compute = function (strandA, strandB) {
	
	if (strandA.length === strandB.length) {
		var i, d = 0;
		
		for (i = 0; i < strandA.length; i++) {
			d = strandA[i] !== strandB[i] ? d + 1 : d;
		}
		
		return d;
		
	} else {
		throw {
			name: 'Error',
			message: 'DNA strands must be of equal length.'
		}
	}
}

module.exports = Hamming;