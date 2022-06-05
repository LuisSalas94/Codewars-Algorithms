/* https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript */

function highAndLow(numbers) {
	let n = [];

	numbers.split(" ").map((ele) => n.push(Number(ele)));

	let sorted = n.sort((a, b) => a - b);

	let result = `${String(Math.max(...sorted))} ${String(Math.min(...sorted))} `;

	return result;
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
