/* 
https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript

Create a function that takes 2 nonnegative integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"

*/

function sumStr(a, b) {
	let intA = Number(a);
	let intB = Number(b);

	return String(intA + intB);
}

console.log(sumStr("4", "5"));
