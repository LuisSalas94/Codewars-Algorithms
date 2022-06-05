/* https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript */
function adjacentElementsProduct(array) {
	let box = [];

	for (let i = 0; i < array.length - 1; i++) {
		box.push(array[i] * array[i + 1]);
	}

	return Math.max(...box);
}

console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]));
