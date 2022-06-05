/* https://www.codewars.com/kata/5a4b16435f08299c7000274f/train/javascript */
const sumSquareEvenRootOdd = (ns) => {
	// your code goes here
	const evenNumbers = ns.filter((num) => num % 2 === 0);
	const oddNumbers = ns.filter((num) => num % 2 != 0);

	let final = [];

	evenNumbers.map((num) => final.push(num * num));
	oddNumbers.map((num) => final.push(Math.sqrt(num)));

	let result = final.reduce((total, curr) => total + curr, 0).toFixed(2);

	return Number(result);
};

console.log(sumSquareEvenRootOdd([1, 14, 9, 8, 17, 21]));
