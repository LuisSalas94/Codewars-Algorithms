//https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript
function arrayMadness(a, b) {
	const sumOfSquares = a.map((num) => num * num).reduce((a, b) => a + b, 0);
	const sumOfCubes = b.map((num) => num * num * num).reduce((a, b) => a + b, 0);
	return sumOfSquares > sumOfCubes;
}

console.log(arrayMadness([5, 6, 7], [4, 5, 6]));
