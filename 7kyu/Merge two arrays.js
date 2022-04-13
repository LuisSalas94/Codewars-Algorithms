/* https://www.codewars.com/kata/583af10620dda4da270000c5/train/javascript */
function mergeArrays(a, b) {
	const result = [];
	const longest = a.length > b.length ? a : b;
	for (let i = 0; i < longest.length; i++) {
		if (a[i]) result.push(a[i]);
		if (b[i]) result.push(b[i]);
	}
	result;
}

console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]));
