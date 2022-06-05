/* https://www.codewars.com/kata/coding-meetup-number-7-higher-order-functions-series-find-the-most-senior-developer */
function findSenior(list) {
	let maxAge = Math.max(...list.map((dev) => dev.age));

	return list.filter((dev) => dev.age === maxAge);
}

var list1 = [
	{
		firstName: "Gabriel",
		lastName: "X.",
		country: "Monaco",
		continent: "Europe",
		age: 49,
		language: "PHP",
	},
	{
		firstName: "Odval",
		lastName: "F.",
		country: "Mongolia",
		continent: "Asia",
		age: 38,
		language: "Python",
	},
	{
		firstName: "Emilija",
		lastName: "S.",
		country: "Lithuania",
		continent: "Europe",
		age: 19,
		language: "Python",
	},
	{
		firstName: "Sou",
		lastName: "B.",
		country: "Japan",
		continent: "Asia",
		age: 49,
		language: "PHP",
	},
];

var list2 = [
	{
		firstName: "Gabriel",
		lastName: "X.",
		country: "Monaco",
		continent: "Europe",
		age: 49,
		language: "PHP",
	},
	{
		firstName: "Odval",
		lastName: "F.",
		country: "Mongolia",
		continent: "Asia",
		age: 38,
		language: "Python",
	},
	{
		firstName: "Emilija",
		lastName: "S.",
		country: "Lithuania",
		continent: "Europe",
		age: 19,
		language: "Python",
	},
];

console.log(findSenior(list1));
