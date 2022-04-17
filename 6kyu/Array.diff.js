/* https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript */
function arrayDiff(a, b) {
	const arrays = [a, b];

	const result = arrays.shift().filter(function (v) {
		return arrays.every(function (a) {
			return a.indexOf(v) !== -1;
		});
	});

	return a.filter((x) => !result.includes(x));
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
