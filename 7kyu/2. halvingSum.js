/* 
https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript
*/

function halvingSum(n) {
	let firstN = n;

	let result = [];

	while (n != 1) {
		n = Math.floor(n / 2);
		result.push(n);
	}

	return [firstN, ...result].reduce((total, curr) => total + curr, 0);
}

console.log(halvingSum(127));
