/* https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript */
function reverseNumber(n) {
	let reverseNum = n.toString().split("").reverse().join("");
	return parseInt(reverseNum) * Math.sign(n);
}

console.log(reverseNumber(1000));
