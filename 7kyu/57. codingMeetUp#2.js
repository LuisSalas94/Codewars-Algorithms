/* https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript */
function greetDevelopers(list) {
	return list.map((v) => ({
		...v,
		greeting: `Hi ${v.firstName}, what do you like the most about ${v.language}?`,
	}));
}

var list1 = [
	{
		firstName: "Sofia",
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
		language: "Python",
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

console.log(greetDevelopers(list1));
