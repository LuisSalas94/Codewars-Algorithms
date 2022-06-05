/* https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/javascript */

function toTime(seconds) {
	let hours = (seconds * 1) / 3600;

	let remainder = (hours % 1).toFixed(2);

	let minutes = Math.trunc(remainder * 60);
	minutes;

	if (hours < 1) hours = 0;

	if (minutes === 60) minutes = 0;

	return `${Math.trunc(hours)} hour(s) and ${minutes} minute(s)`;
}

console.log(toTime(5460));
