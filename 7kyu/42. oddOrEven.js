/* https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript */

function oddOrEven(array) {
	let sum = array.reduce((total, curr) => total + curr, 0);

	return sum % 2 !== 0 ? "odd" : "even";
}

console.log(oddOrEven([1023, 1, 3]));
