/* https://www.codewars.com/kata/57b68bc7b69bfc8209000307/train/javascript */

function average(scores) {
	let result = scores.reduce((total, curr) => total + curr, 0) / scores.length;
	return Math.round(result);
}

console.log(average([90, 98, 89, 100, 100, 86, 94]));
