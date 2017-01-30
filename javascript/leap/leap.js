//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(year) {
	this.year = year;
};

Year.prototype.isLeap = function () {
	var y = this.year;
	return isDivisible(y, 4) && !isDivisible(y, 100) || isDivisible(y, 400);
};

function isDivisible (a, b) {
	return a % b === 0;
}

module.exports = Year;
