/* https://www.codewars.com/kata/606b43f4adea6e00425dff42/train/javascript */

function gridMap(fn, a) {
	let result = [];

	for (let i = 0; i < a.length; i++) {
		result.push(a[i].map(fn));
	}
	return result;
}

const charGrid = [
	["H", "e", "l", "l", "o"],
	["W", "o", "r", "l", "d", "!"],
];

console.log(gridMap((x) => x.toUpperCase(), charGrid));
