/* 
https://www.codewars.com/kata/54598d1fcbae2ae05200112c/train/javascript

Create a method all which takes an array and a predicate (function pointer), and returns true if the predicate returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the test.

*/

function all(arr, fun) {
	if (!arr) {
		return true;
	} else {
		return arr.every(fun);
	}
}

console.log(
	all([1, 2, 3, 4, 5], function (v) {
		return v < 9;
	})
);
