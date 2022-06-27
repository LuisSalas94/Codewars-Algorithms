/* https://www.codewars.com/kata/59175441e76dc9f9bc00000f/train/javascript */

function atomicNumber(num) {
	//"What are we doing today, Brain?" "The same thing we did last week, Pinky... Take over the CodeWars"
	const arr = [];
	let count = 1;

	while (count < num) {
		let newNum = arr.push(Math.pow(count, 2));
		count = newNum;
	}
}

atomicNumber(10);
