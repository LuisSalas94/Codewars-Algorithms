/* https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript */

function noOdds(values) {
	return values.filter((ele) => ele % 2 === 0);
}

console.log(noOdds([0, 1, 2, 3]));
