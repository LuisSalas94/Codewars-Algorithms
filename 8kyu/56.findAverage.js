function findAverage(nums) {
	const sum = nums.reduce((a, b) => a + b, 0);
	return sum / nums.length;
}

findAverage([1, 3, 5, 7]);
