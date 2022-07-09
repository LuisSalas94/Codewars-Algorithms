function minSum(arr) {
	const newArr = arr.sort((a, b) => a - b);
	const result = [];
	let p1 = 0;
	let p2 = newArr.length - 1;
	while (p1 < p2) {
		result.push(newArr[p1] * newArr[p2]);
		p1++;
		p2--;
	}
	return result.reduce((a, b) => a + b, 0);
}

console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]));
