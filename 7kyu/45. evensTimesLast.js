/* https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript */

function evenLast(numbers) {
	if (numbers.length === 0) return 0;

	let result = numbers
		.filter((num, index) => index % 2 === 0)
		.reduce((total, curr) => total + curr, 0);

	return result * numbers[numbers.length - 1];
}

console.log(evenLast([]));
