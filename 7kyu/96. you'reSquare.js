/* https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript */

var isSquare = function (n) {
	return Math.sqrt(n).toFixed(0) * Math.sqrt(n) === n;
};

console.log(isSquare(34));
