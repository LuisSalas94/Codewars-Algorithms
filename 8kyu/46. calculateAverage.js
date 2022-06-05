/* 
https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function find_average(array) {
	// your code here
	if (array.length === 0) return 0;
	return array.reduce((total, curr) => total + curr, 0) / array.length;
}

console.log(find_average([1, 2, 3, 4]));
