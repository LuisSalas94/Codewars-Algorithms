/* https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript */
function getEvenNumbers(numbersArray) {
	return numbersArray.filter((number) => number % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));
