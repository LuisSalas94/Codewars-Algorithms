/* https://www.codewars.com/kata/604517d65b464d000d51381f/train/javascript */

function strangeMath(n, k) {
	let numbers = [];

	for (let i = 1; i <= n; i++) numbers.push(i);

	let sorted = numbers.sort();

	for (let i = 0; i < sorted.length; i++) {
		if (sorted[i] === k) return i + 1;
	}
}

console.log(strangeMath(15, 15));
//4
