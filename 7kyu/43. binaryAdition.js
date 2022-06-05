/* https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript */

function addBinary(a, b) {
	let n = a + b;

	let binary = "";

	while (n > 0) {
		binary = binary + (n % 2);
		n = Math.floor(n / 2);
	}

	return binary.split("").reverse().join("");
}

/* function addBinary(a, b) {
	return (a + b).toString(2);
} */

console.log(addBinary(4, 5));
