function maxProduct(numbers, size) {
	const sorted = numbers.sort((a, b) => a - b);
	const maxNums = sorted.slice(-size);
	return maxNums.reduce((a, b) => a * b, 1);
}

console.log(maxProduct([10, 8, 3, 3, 1, 4, 10], 5));
