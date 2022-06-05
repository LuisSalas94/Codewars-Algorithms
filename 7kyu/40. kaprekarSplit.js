/* https://www.codewars.com/kata/5b6ee22ac5cc71833f0010d7/train/javascript */

function kaprekarSplit(n) {
	if (n === 1) return 0;

	let temp = n;

	n *= n;

	let length = n.toString().length;

	for (let i = 1; i < length; i++) {
		if (
			Number(n.toString().split("").slice(0, i).join("")) +
				Number(n.toString().split("").slice(i).join("")) ===
			temp
		) {
			return i;
		}
	}

	return -1;
}

console.log(kaprekarSplit(5050));
