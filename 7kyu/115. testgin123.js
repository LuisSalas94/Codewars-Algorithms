function number(arr) {
	if (arr.length === 0) return [];

	let result = [];

	for (let i = 0; i < arr.length; i++) {
		result.push(`${i + 1}: ${arr[i]}`);
	}

	return result;
}

console.log(number(["a", "b", "c"]));
