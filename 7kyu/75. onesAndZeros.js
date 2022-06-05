/* https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript */
const binaryArrayToNumber = (arr) => {
	// your code
	/* 	let pow = [];
	let decimal = [];
	for (let i = 0; i <= arr.length - 1; i++) {
		pow.unshift(i);
	}

	arr.map((x, index) => {
		decimal.push(x * 2 ** pow[index]);
	});

	return decimal.reduce((total, curr) => total + curr, 0); */
	return parseInt(arr.join(""), 2);
};

console.log(binaryArrayToNumber([1, 0, 1, 1]));
