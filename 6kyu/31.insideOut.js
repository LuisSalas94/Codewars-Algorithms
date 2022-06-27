/* https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5/train/javascript */

function firstNSmallest(array, n) {
	let result = [];
	let result2 = [];
	const maxNum = Math.max(...array);

	for (const num of array) {
		if (num < maxNum) {
			result.push(num);
		}
	}

	if (array[0] == maxNum) {
		for (let i = result.length - 1; i > 0; i--) {
			result2.push(result[i]);
		}
		return result2.reverse();
	} else {
		for (let i = 0; i < result.length - 1; i++) {
			result2.push(result[i]);
		}
		return result2;
	}
}

console.log(firstNSmallest([1, 2, 3, 4, 5]));
