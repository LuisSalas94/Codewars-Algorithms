function evenNumbers(array, number) {
	// good luck
	let even = array.filter((ar) => {
		return ar % 2 === 0;
	});

	return even.slice(-number);
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
//4.6.8
