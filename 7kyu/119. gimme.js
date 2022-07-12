function gimme(triplet) {
	const middle = [...triplet].sort((a, b) => a - b)[1];
	return triplet.findIndex((index) => index === middle);
}

console.log(gimme([5, 10, 14]));
