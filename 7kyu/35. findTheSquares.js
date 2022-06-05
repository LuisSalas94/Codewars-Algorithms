/* https://www.codewars.com/kata/60908bc1d5811f0025474291/train/javascript */

const findSquares = (num) => {
	let box = [];

	for (let i = num; i >= 1; i--) box.push(i);

	let result = [];

	for (let i = 0; i < box.length; i++) {
		if (box[i] + box[i + 1] === num) {
			result.push(box[i], box[i + 1]);
		}
	}

	return `${String(result[0] * result[0])} - ${String(result[1] * result[1])}`;
};

console.log(findSquares(9));
//"25 - 16"
