/* https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript */
function comp(array1, array2) {
	if (!array1 || !array2) return false;
	let sqrts = [];
	array2.map((num) => sqrts.push(Math.sqrt(num)));
	return (
		array1.length === sqrts.length &&
		array1
			.sort((a, b) => a - b)
			.every((num, index) => num === sqrts.sort((a, b) => a - b)[index])
	);
}

console.log(
	comp(
		[121, 144, 19, 161, 19, 144, 19, 11],
		[121, 14641, 20736, 361, 25921, 361, 20736, 361]
	)
);
