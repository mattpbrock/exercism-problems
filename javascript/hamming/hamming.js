

var Hamming = function () {};

Hamming.prototype.compute = function (strandA, strandB) {
	
	var i, d = 0;
	
	if (strandA.length !== strandB.length) {
		throw {
			name: 'Error',
			message: 'DNA strands must be of equal length.'
		}
	}
	
	for (i = 0; i < strandA.length; i++) {
		d = strandA[i] !== strandB[i] ? d + 1 : d;
	}
	
	return d;
}

module.exports = Hamming;