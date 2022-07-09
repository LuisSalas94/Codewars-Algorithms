function alternate(n, firstValue, secondValue) {
	// your code
	const array = Array(n);

	for (let i = 0; i < array.length; i += 2) {
		array[i] = firstValue;
	}

	for (let i = 1; i < array.length; i += 2) {
		array[i] = secondValue;
	}

	return array;
}

console.log(alternate(5, true, false));
