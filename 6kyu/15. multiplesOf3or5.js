/* https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript */
function solution(number) {
	if (number <= 3) return 0;
	let boxNumbers = [];
	for (let i = 1; i < number; i++) {
		boxNumbers.push(i);
	}
	boxNumbers;
	return boxNumbers
		.filter((num) => num % 3 === 0 || num % 5 === 0 || num % 15 === 0)
		.reduce((acu, cur) => acu + cur);
}

console.log(solution(3));
