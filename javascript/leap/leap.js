//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function() {};

Year.prototype.isLeap = function(year) {
	
	function hasRemainder (a, b) {
		return a % b > 0;
	}
	
	if (hasRemainder(year, 4)) {
		return false;
	} else {
		if (!hasRemainder(year, 100)) {
			return !hasRemainder(year, 400);
		} else {
			return true;
		}
	}
	
};

module.exports = Year;
