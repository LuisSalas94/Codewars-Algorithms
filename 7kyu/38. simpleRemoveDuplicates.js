/* https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript */

function solve(arr) {
	return [...new Set(arr.reverse())].reverse();
}

console.log(solve([1, 1, 4, 5, 1, 2, 1]));
