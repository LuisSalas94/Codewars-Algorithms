/* https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript */

function squareDigits(num) {
	let result = String(num)
		.split("")
		.map((e) => Number(e * e))
		.join("");

	return Number(result);
}

console.log(squareDigits(9119));
