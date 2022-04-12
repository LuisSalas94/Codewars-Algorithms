//www.codewars.com/kata/563b1f55a5f2079dc100008a/train/javascript
function getLargerNumbers(a, b) {
	const result = [];

	for (let i = 0; i < a.length; i++) {
		a[i] > b[i] ? result.push(a[i]) : result.push(b[i]);
	}

	return result;
}

console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]));
