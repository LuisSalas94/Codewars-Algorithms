/* https://www.codewars.com/kata/59cd155d1a68b70f8e000117/train/javascript */
function middleMe(n, x, z) {
	if (n % 2 !== 0) return x;

	let str = "";

	for (let i = 0; i < n; i++) {
		str += z;
	}

	let middle = str.length / 2;

	return str
		.split("")
		.slice(0, middle)
		.concat(x)
		.concat(str.slice(-middle))
		.join("");
}

console.log(middleMe(18, "z", "#"));
