function doubleEveryOther(a) {
	const result = [];
	for (let i = 0; i < a.length; i++) {
		i % 2 !== 0 ? result.push(a[i] * 2) : result.push(a[i]);
	}
	return result;
}

console.log(doubleEveryOther([1, 2, 3, 4]));
