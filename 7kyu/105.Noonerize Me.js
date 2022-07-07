/* https://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd/train/javascript */
function noonerize(numbers) {
	if (typeof numbers[0] === "string" || typeof numbers[1] === "string") {
		return "invalid array";
	}

	const firstDigit = numbers[0].toString().split("")[0];
	const secondDigit = numbers[1].toString().split("")[0];

	function getNum(index, array, digit) {
		let num = array[index].toString().split("");
		num.shift(digit);
		num.unshift(digit);
		return Number(num.join(""));
	}

	const num1 = getNum(0, numbers, secondDigit);
	const num2 = getNum(1, numbers, firstDigit);
	return Math.abs(num1 - num2);
}

console.log(noonerize([357, 579]));
