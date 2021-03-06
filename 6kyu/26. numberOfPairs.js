function numberOfPairs(gloves) {
	let objGloves = {};
	const counter = [];

	for (item of gloves) {
		objGloves[item] ? (objGloves[item] += 1) : (objGloves[item] = 1);
	}

	Object.entries(objGloves).forEach(([key, value]) => {
		if (value >= 2) {
			counter.push(value);
		}
	});

	return counter[0] === 2 ? counter.length : counter / 2;
}

console.log(
	numberOfPairs(["gray", "black", "purple", "purple", "gray", "black"])
);
