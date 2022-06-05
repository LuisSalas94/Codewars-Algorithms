/* 
https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
*/

function getDivisorsCnt(n) {
	// todo
	let count = 0;

	for (let i = 0; i <= n; i++) {
		if (n % i === 0) count++;
	}

	return count;
}

console.log(getDivisorsCnt(54));
