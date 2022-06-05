/* https://www.codewars.com/kata/5702f077e55d30a7af000115/train/javascript */
function countName(anArr, name) {
	let count = 0;

	for (let main of anArr) {
		if (main === name) {
			count++;
		}
	}

	return count;
}

const MAINLIST = [
	"Bob",
	"Ted",
	"Amy",
	"Alice",
	"Bob",
	"Ted",
	"Amy",
	"Ted",
	"Amy",
	"Fred",
];

console.log(countName(["Tom", "Bob", "Harry", "Bob"], "Bob"));
