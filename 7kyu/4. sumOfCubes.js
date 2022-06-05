/* 
https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript
*/

function sumCubes(n) {
	let sum = 0;

	for (let i = 1; i <= n; i++) {
		sum += i * i * i;
	}

	return sum;
}

console.log(sumCubes(10));
