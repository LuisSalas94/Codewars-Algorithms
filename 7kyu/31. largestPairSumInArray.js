/* https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript */

function largestPairSum(numbers) {
	let arr = numbers.sort((a, b) => b - a);
	return arr[0] + arr[1];
}

console.log(largestPairSum([10, 14, 2, 23, 19]));
