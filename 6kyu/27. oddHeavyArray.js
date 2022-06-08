function isOddHeavy(n) {
	const oddArr = n.filter((item) => item % 2 !== 0);
	const evenArr = n.filter((item) => item % 2 === 0);
	const minOddArr = Math.min(...oddArr);
	const maxEvenArr = Math.max(...evenArr);

	return minOddArr > maxEvenArr;
}

console.log(isOddHeavy([1, -2, -1, 2]));
