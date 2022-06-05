function findOdd(A) {
	let numMap = {};

	for (let num of A) {
		if (numMap[num]) {
			numMap[num]++;
		} else {
			numMap[num] = 1;
		}
	}

	numMap;

	let result = Object.values(numMap).filter((num) => num % 2 != 0);
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
