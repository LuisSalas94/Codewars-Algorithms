const tourney = (array) => {
	/* 	//even array length
	if (array.length % 2 === 0) {
		for (let i = 0; i < array.length; i += 2) {
			return [(array = Math.max(array[i], array[i + 1]))];
		}
	} else {
		//odd array length
		const last = array[array.length - 1];
		array.splice(array.length - 1, last);
		array.unshift(last);
		for (let i = 1; i < array.length; i += 2) {
			return [(array = Math.max(array[i], array[i + 1]))];
		}
	} */
};

console.log(tourney([9, 5, 4, 7, 6, 3, 8, 2]));
