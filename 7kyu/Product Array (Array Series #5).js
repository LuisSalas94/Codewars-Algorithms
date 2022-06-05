/* https://www.codewars.com/kata/5a905c2157c562994900009d/train/javascript */
function isOddHeavy(n) {
	const odds = n.filter((num) => num % 2 !== 0);
	const evens = n.filter((num) => num % 2 == 0);
}

console.log(isOddHeavy([11, 4, 9, 2, 3, 10]));
