/* https://www.codewars.com/kata/coding-meetup-number-16-higher-order-functions-series-ask-for-missing-details */

function askForMissingDetails(list) {
	return list.map((v) => ({
		...v,
		question: `Hi, could you please provide your ${5}`,
	}));
}

var list1 = [
	{
		firstName: null,
		lastName: "I.",
		country: "Argentina",
		continent: "Americas",
		age: 35,
		language: "Java",
	},
	{
		firstName: "Lukas",
		lastName: "X.",
		country: "Croatia",
		continent: "Europe",
		age: 35,
		language: null,
	},
	{
		firstName: "Madison",
		lastName: "U.",
		country: "United States",
		continent: "Americas",
		age: 32,
		language: "Ruby",
	},
];

console.log(askForMissingDetails(list1));
