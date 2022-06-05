/* https://www.codewars.com/kata/coding-meetup-number-15-higher-order-functions-series-find-the-odd-names */
function findOddNames(list) {
	// thank you for checking out the Coding Meetup kata :)
	let names = [];
	list.forEach((dev) => names.push(dev.firstName));

	let name1 = names[0];
	let name1Box = [];
	for (let i = 0; i < name1.length; i++) {
		name1Box.push(name1.charCodeAt(i));
	}

	name1Box = name1Box.reduce((total, curr) => total + curr, 0);

	let name2 = names[1];
	let name2Box = [];
	for (let i = 0; i < name2.length; i++) {
		name2Box.push(name2.charCodeAt(i));
	}

	name2Box = name2Box.reduce((total, curr) => total + curr, 0);
	name1Box;
	name2Box;
}

var list1 = [
	{
		firstName: "Aba",
		lastName: "N.",
		country: "Ghana",
		continent: "Africa",
		age: 21,
		language: "Python",
	},
	{
		firstName: "Abb",
		lastName: "O.",
		country: "Israel",
		continent: "Asia",
		age: 39,
		language: "Java",
	},
];

console.log(findOddNames(list1));
