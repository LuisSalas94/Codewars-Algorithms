/* https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript */
function sortArray(array) {
	// Return a sorted array.
	let oddNumbers = array.filter((num) => num % 2 != 0).sort((a, b) => a - b);
	let counter = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 != 0) {
			array[i] = oddNumbers[counter];
			counter++;
		}
	}
	return array;
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
