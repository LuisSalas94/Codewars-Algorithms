/* https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript */
function firstNonConsecutive(arr) {
	let result = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] + 1 !== arr[i + 1]) {
			result = arr[i + 1];
			break;
		}
	}

	return !result ? null : result;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
