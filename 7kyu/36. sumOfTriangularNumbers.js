/* https://www.codewars.com/kata/580878d5d27b84b64c000b51/train/javascript */

function sumTriangularNumbers(n) {
	let triangularNumbers = [];

	for (let i = 1; i <= n; i++) {
		triangularNumbers.push((i * (i + 1)) / 2);
	}

	return n < 0 ? 0 : triangularNumbers.reduce((total, curr) => total + curr, 0);
}

console.log(sumTriangularNumbers(-9));

/* 
0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210, 231, 253, 276, 300, 325, 351, 378, 406, 435, 465, 496, 528, 561, 595, 630, 666...

n(n+1)/2

*/
