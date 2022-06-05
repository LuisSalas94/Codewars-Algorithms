/* 
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/

function removeChar(str) {
	/* let last = str.slice(-1); */
	/* if (typeof last === "number") return " "; */

	if (str.length === 2) return str;

	return str.slice(1).slice(0, -1);
}

console.log(removeChar("w8"));
//'loquen'
