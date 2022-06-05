/* https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript */

function stray(numbers) {
	let numMap = {};

	for (let num of numbers) {
		if (!numMap[num]) {
			numMap[num] = 1;
		} else {
			numMap[num]++;
		}
	}

	let min = Math.min(...Object.values(numMap));

	let result = String(Object.keys(numMap).find((key) => numMap[key] === min));

	return result;
}

console.log(stray(["2"]));
