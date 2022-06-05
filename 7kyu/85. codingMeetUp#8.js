/* https://www.codewars.com/kata/coding-meetup-number-8-higher-order-functions-series-will-all-continents-be-represented */
function allContinents(list) {
	// thank you for checking out the Coding Meetup kata :)
	return list.every((dev) => dev.firstName);
}

var list1 = [
	{
		firstName: "Fatima",
		lastName: "A.",
		country: "Algeria",
		continent: "Africa",
		age: 25,
		language: "JavaScript",
	},
	{
		firstName: "Agustín",
		lastName: "M.",
		country: "Chile",
		continent: "Americas",
		age: 37,
		language: "C",
	},
	{
		firstName: "Jing",
		lastName: "X.",
		country: "China",
		continent: "Asia",
		age: 39,
		language: "Ruby",
	},
	{
		firstName: "Laia",
		lastName: "P.",
		country: "Andorra",
		continent: "Europe",
		age: 55,
		language: "Ruby",
	},
	{
		firstName: "Oliver",
		lastName: "Q.",
		country: "Australia",
		continent: "Oceania",
		age: 65,
		language: "PHP",
	},
];

var list2 = [
	{
		firstName: "Fatima",
		lastName: "A.",
		country: "Algeria",
		continent: "Africa",
		age: 25,
		language: "JavaScript",
	},
];

console.log(allContinents(list2));
