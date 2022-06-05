/* https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript */
function findDeletedNumber(arr, mixArr) {
	if (arr.length === mixArr.length) return 0;

	const orderedArr = mixArr.sort((a, b) => a - b);

	for (let i = 0; i < orderedArr.length; i++) {
		if (!(orderedArr[i] + 1 === orderedArr[i + 1])) {
			return orderedArr[i] + 1;
		}
	}
}

console.log(
	findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 2, 4, 6, 7, 8, 1, 9])
);
