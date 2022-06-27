//www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript
function mergeArrays(arr1, arr2) {
	const newArr = Array.from(new Set([...arr1, ...arr2]));
	return newArr.sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
