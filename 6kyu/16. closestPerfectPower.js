/* https://www.codewars.com/kata/57c7930dfa9fc5f0e30009eb/train/javascript */
function closestPower(n) {
	if (n <= 4) return 4;
	let box = [];
	for (let i = 2; i < n; i++) {
		for (let j = 2; j < n; j++) {
			if (Math.pow(i, j) <= n) {
				box.push(Math.pow(i, j));
			}
		}
	}
	box = Array(...new Set(box.sort((a, b) => b - a)));
	return box.includes(n) ? n : box.find((number) => number < n);
}

console.log(closestPower(30));
