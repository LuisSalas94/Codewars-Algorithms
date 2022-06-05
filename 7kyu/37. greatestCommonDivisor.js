/* https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript */

function mygcd(x, y) {
	let temp = 0;

	while (x != 0) {
		temp = x;
		x = y % x;
		y = temp;
	}

	return y;
}

console.log(mygcd(8, 9));
