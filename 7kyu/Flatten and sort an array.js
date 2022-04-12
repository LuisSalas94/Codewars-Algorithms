/* https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript */

function flattenAndSort(array) {
	return (array = array.flat().sort((a, b) => a - b));
}

console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));
