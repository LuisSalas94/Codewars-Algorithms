/* https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript */
function sumOfMinimums(arr) {
	const min = [];
	for (let i = 0; i < arr.length; i++) {
		min.push(Math.min(...arr[i]));
	}
	return min.reduce((a, b) => a + b, 0);
}

console.log(
	sumOfMinimums([
		[11, 12, 14, 54],
		[67, 89, 90, 56],
		[7, 9, 4, 3],
		[9, 8, 6, 7],
	])
);
