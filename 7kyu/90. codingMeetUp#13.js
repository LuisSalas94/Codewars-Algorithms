/* https://www.codewars.com/kata/coding-meetup-number-13-higher-order-functions-series-is-the-meetup-language-diverse */
function isLanguageDiverse(list) {
	let languageMap = {};

	list.forEach((dev) => {
		languageMap[dev.language]
			? languageMap[dev.language]++
			: (languageMap[dev.language] = 1);
	});

	let min = Math.min(...Object.values(languageMap));
	let max = Math.max(...Object.values(languageMap));

	return max <= min * 2 ? true : false;
}

var list1 = [
	{
		firstName: "Daniel",
		lastName: "J.",
		country: "Aruba",
		continent: "Americas",
		age: 42,
		language: "Python",
	},
	{
		firstName: "Kseniya",
		lastName: "T.",
		country: "Belarus",
		continent: "Europe",
		age: 22,
		language: "Ruby",
	},
	{
		firstName: "Sou",
		lastName: "B.",
		country: "Japan",
		continent: "Asia",
		age: 43,
		language: "Ruby",
	},
	{
		firstName: "Hanna",
		lastName: "L.",
		country: "Hungary",
		continent: "Europe",
		age: 95,
		language: "JavaScript",
	},
	{
		firstName: "Jayden",
		lastName: "P.",
		country: "Jamaica",
		continent: "Americas",
		age: 18,
		language: "JavaScript",
	},
	{
		firstName: "Joao",
		lastName: "D.",
		country: "Portugal",
		continent: "Europe",
		age: 25,
		language: "JavaScript",
	},
];

var list2 = [
	{
		firstName: "Daniel",
		lastName: "J.",
		country: "Aruba",
		continent: "Americas",
		age: 42,
		language: "Python",
	},
	{
		firstName: "Kseniya",
		lastName: "T.",
		country: "Belarus",
		continent: "Europe",
		age: 22,
		language: "Ruby",
	},
	{
		firstName: "Hanna",
		lastName: "L.",
		country: "Hungary",
		continent: "Europe",
		age: 95,
		language: "JavaScript",
	},
	{
		firstName: "Jayden",
		lastName: "P.",
		country: "Jamaica",
		continent: "Americas",
		age: 18,
		language: "JavaScript",
	},
	{
		firstName: "Joao",
		lastName: "D.",
		country: "Portugal",
		continent: "Europe",
		age: 25,
		language: "JavaScript",
	},
];

var list3 = [
	{
		firstName: "Daniel",
		lastName: "J.",
		country: "Aruba",
		continent: "Americas",
		age: 42,
		language: "Python",
	},
	{
		firstName: "Kseniya",
		lastName: "T.",
		country: "Belarus",
		continent: "Europe",
		age: 22,
		language: "Ruby",
	},
	{
		firstName: "Jayden",
		lastName: "P.",
		country: "Jamaica",
		continent: "Americas",
		age: 18,
		language: "JavaScript",
	},
	{
		firstName: "Joao",
		lastName: "D.",
		country: "Portugal",
		continent: "Europe",
		age: 25,
		language: "JavaScript",
	},
];

var list4 = [
	{
		firstName: "Daniel",
		lastName: "J.",
		country: "Aruba",
		continent: "Americas",
		age: 42,
		language: "Python",
	},
	{
		firstName: "Kseniya",
		lastName: "T.",
		country: "Belarus",
		continent: "Europe",
		age: 22,
		language: "Ruby",
	},
	{
		firstName: "Joao",
		lastName: "D.",
		country: "Portugal",
		continent: "Europe",
		age: 25,
		language: "JavaScript",
	},
];

var list5 = [
	{
		firstName: "Daniel",
		lastName: "J.",
		country: "Aruba",
		continent: "Americas",
		age: 42,
		language: "Python",
	},
	{
		firstName: "Kseniya",
		lastName: "T.",
		country: "Belarus",
		continent: "Europe",
		age: 22,
		language: "Ruby",
	},
	{
		firstName: "Sou",
		lastName: "B.",
		country: "Japan",
		continent: "Asia",
		age: 43,
		language: "Ruby",
	},
	{
		firstName: "Hanna",
		lastName: "L.",
		country: "Hungary",
		continent: "Europe",
		age: 95,
		language: "JavaScript",
	},
	{
		firstName: "Jayden",
		lastName: "P.",
		country: "Jamaica",
		continent: "Americas",
		age: 18,
		language: "JavaScript",
	},
	{
		firstName: "Joao",
		lastName: "D.",
		country: "Portugal",
		continent: "Europe",
		age: 25,
		language: "JavaScript",
	},
];

console.log(isLanguageDiverse(list5));
