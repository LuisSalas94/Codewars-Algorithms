/* https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/train/javascript */
function loopArr(arr, direction, steps) {
	if (direction === "left") {
		const firstTwo = arr.slice(0, steps);
		arr = arr.splice(steps);
		arr.push(...firstTwo);
		return arr;
	}

	if (direction === "right") {
		const lastTwo = arr.slice(-steps);
		lastTwo;
		arr = arr.splice(0, steps * 2);
		arr.unshift(...lastTwo);
		return arr;
	}
}

console.log(
	loopArr(
		[
			798, 951, 798, 609, 884, 889, 232, 771, 131, 808, 417, 100, 754, 982, 616,
			390, 334, 932, 445, 351, 797, 284, 193, 456, 720,
		],
		"right",
		11
	)
);
