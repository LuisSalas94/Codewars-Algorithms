/* https://www.codewars.com/kata/559ce00b70041bc7b600013d/train/javascript */
function finance(n) {
	let week0 = [0, 1, 2, 3, 4, 5, 6];
	let counter = 0;
	let temSum = 0;
	let temArr = week0;

	while (counter < n) {
		temSum = week0.reduce((a, b) => a + b, 0);
		temSum;
		temArr.pop();
		temArr;
		temArr = temArr.map((num) => num + 2);
		temArr;

		counter++;
	}

	return temArr.reduce((a, b) => a + b, 0) + temSum;
}

console.log(finance(2));

/* temSum = wek0.reduce((acu, curr) => acu + curr, 0);

	let newWeek = wek0.map((num) => num + 2);

	return newWeek.reduce((acu, curr) => acu + curr, 0) + temSum; */
