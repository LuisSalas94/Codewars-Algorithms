function positiveSum(arr) {
	return arr.filter((num) => num > 0).reduce((a, b) => a + b, 0);
}

console.log(positiveSum([-1, 2, 3, 4, -5]));
