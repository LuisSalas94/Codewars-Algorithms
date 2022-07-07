/*https://www.codewars.com/kata/57f7796697d62fc93d0001b8/train/javascript  */
function trouble(x, t) {
	for (let i = 0; i < x.length; i++) {
		if (x[i] + x[i + 1] === t) {
			x.splice(i + 1, 1);
			break;
		}
	}
	return x;
}

console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7));
