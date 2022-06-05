/* https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript */
function high(x) {
	x = x.split(" ");
	let max = 0;
	for (let word of x) {
		if (word.length > max) {
			max = word.length;
		}
	}
	return x.find((word) => word.length === max);
}

console.log(high("d bb"));
