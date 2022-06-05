/* https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/train/javascript */
function well(x) {
	let goodCount = 0;

	x = x.flat();

	for (let str of x) {
		if (str === "gOOd" || str === "GOOD") goodCount++;
	}

	if (goodCount === 0) return "Fail!";

	return goodCount <= 2 ? "Publish!" : "I smell a series!";
}

console.log(
	well([
		["bad", "bAd", "bad"],
		["bad", "bAd", "bad"],
		["bad", "bAd", "bad"],
	])
);
