function countPositivesSumNegatives(input) {
	if (input.length === 0) {
		return [];
	}
	console.log(input.length);

	const result = [];
	const positivesCount = input.filter((num) => num > 0).length;
	const sumOfNegatives = input
		.filter((num) => num < 0)
		.reduce((a, b) => a + b, 0);
	result.push(positivesCount);
	result.push(sumOfNegatives);
	return result;
}

console.log(countPositivesSumNegatives([]));
