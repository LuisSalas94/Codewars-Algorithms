function removeSmallest(numbers) {
	const min = Math.min(...numbers);
	const indexOfMin = numbers.indexOf(min);
	const newNumbers = [...numbers];
	for (const num of newNumbers) {
		if (num === min) {
			newNumbers.splice(indexOfMin, 1);
			break;
		}
	}
	return newNumbers;
}

console.log(removeSmallest([2, 2, 1, 2, 1]));
