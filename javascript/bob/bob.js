
var Bob = function () {};

Bob.prototype.hey = function (input) {
	
	var responses = {
		question: 'Sure.',
		yelling: 'Whoa, chill out!',
		silence: 'Fine. Be that way!',
		other: 'Whatever.'
	};
	
	var i = input;
	
	function onlyNumbers (str, delim) {
		var chars = str.split(delim) || chars;
		
		for (var j = 0; j < chars.length; j++) {
			if (chars[j] != parseInt(chars[j])) return false;
		}
		
		return true;
	}
	
	// input is empty or only whitespace
	if (i.trim().length === 0) return responses.silence;
	
	// input is a comma-separated string of numbers
	if (onlyNumbers (i, ', ')) return responses.other;
	
	// input was only numbers in a question
	if (onlyNumbers(i.split('?')[0])) return responses.question;
	
	// input was uppercase to being with
	if (i === i.toUpperCase()) return responses.yelling;
	
	// input ends with a ?
	if (i[i.length - 1] === '?') return responses.question;
	return responses.other;
	
}

module.exports = Bob;