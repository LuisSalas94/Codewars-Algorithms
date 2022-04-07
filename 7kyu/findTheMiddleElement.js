function triplet(arr) {
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	const num = Number(arr.filter((num) => num !== max && num !== min));
	return arr.indexOf(num);
}

console.log(triplet([2, 3, 1]));
