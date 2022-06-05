/* https://www.codewars.com/kata/563700da1ac8be8f1e0000dc/train/javascript */
var maxRedigit = function (num) {
	if (num < 1) return null;

	if (typeof num === "number") {
		return parseInt(num.toString().split("").reverse().join(""));
	}
};

console.log(maxRedigit(123));
