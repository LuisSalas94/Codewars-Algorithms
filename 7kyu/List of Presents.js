/* https://www.codewars.com/kata/5a84d485742ba347b90006b7/train/javascript */
function howManyGifts(maxBudget, gifts) {
	if (maxBudget === 0) return 0;
	let flag = 0;
	let count = 0;
	gifts = gifts.sort((a, b) => a - b);
	for (let i = 0; i < gifts.length; i++) {
		if (count <= maxBudget && count + gifts[i + 1] <= maxBudget) {
			count += gifts[i];
			flag += 1;
		}
	}

	return flag;
}

console.log(howManyGifts(20, [13, 2, 4, 6, 1]));
