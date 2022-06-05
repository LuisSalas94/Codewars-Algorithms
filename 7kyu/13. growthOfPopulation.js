/* https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

*/

function nbYear(p0, percent, aug, p) {
	percent *= 0.01;
	let startYear = p0 + p0 * percent + aug;
	let count = 1;

	while (startYear < p) {
		startYear = startYear + startYear * percent + aug;
		count++;
	}

	return count;
}

console.log(nbYear(1500000, 2.5, 10000, 2000000));

//console.log(2.5 * 0.01);
