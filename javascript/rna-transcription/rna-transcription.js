
var DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function (strand) {
	
	var i,
			rna = '',
			dna = strand.toUpperCase();
	
	var compliments = {
		A: "U",
		C: "G",
		G: "C",
		T: "A"
	};
	
	for (i = 0; i < dna.length; i++) {
		rna += compliments[dna[i]];
	}
	
	return rna;
	
}

module.exports = DnaTranscriber;