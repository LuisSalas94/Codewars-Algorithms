/* https://www.codewars.com/kata/coding-meetup-number-11-higher-order-functions-series-find-the-average-age */
function getAverageAge(list) {
	// thank you for checking out the Coding Meetup kata :)
	return Math.round(
		list.reduce((total, curr) => total + curr.age, 0) / list.length
	);
}

var list1 = [
	{
		firstName: "Maria",
		lastName: "Y.",
		country: "Cyprus",
		continent: "Europe",
		age: 30,
		language: "Java",
	},
	{
		firstName: "Victoria",
		lastName: "T.",
		country: "Puerto Rico",
		continent: "Americas",
		age: 70,
		language: "Python",
	},
];

var list2 = [
	{
		firstName: "Noa",
		lastName: "A.",
		country: "Israel",
		continent: "Asia",
		age: 20,
		language: "Ruby",
	},
	{
		firstName: "Andrei",
		lastName: "E.",
		country: "Romania",
		continent: "Europe",
		age: 21,
		language: "C",
	},
];

console.log(getAverageAge(list1));
