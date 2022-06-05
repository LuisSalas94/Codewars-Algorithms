/* https://www.codewars.com/kata/5827acd5f524dd029d0005a4/train/javascript */
function isRubyComing(list) {
	let ruby = list.filter((dev) => dev.language === "Ruby");
	return ruby.length >= 1 ? true : false;
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

var list2 = [
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
];

var list3 = [
	{
		firstName: "Emma",
		lastName: "Z.",
		country: "Netherlands",
		continent: "Europe",
		age: 29,
		language: "Ruby",
	},
	{
		firstName: "Piotr",
		lastName: "B.",
		country: "Poland",
		continent: "Europe",
		age: 128,
		language: "Javascript",
	},
	{
		firstName: "Jayden",
		lastName: "P.",
		country: "Jamaica",
		continent: "Americas",
		age: 42,
		language: "JavaScript",
	},
];

var list4 = [
	{
		firstName: "Kseniya",
		lastName: "T.",
		country: "Belarus",
		continent: "Europe",
		age: 29,
		language: "JavaScript",
	},
	{
		firstName: "Emma",
		lastName: "U.",
		country: "Belgium",
		continent: "Europe",
		age: 39,
		language: "Python",
	},
	{
		firstName: "Amar",
		lastName: "V.",
		country: "Bosnia and Herzegovina",
		continent: "Europe",
		age: 32,
		language: "Ruby",
	},
	{
		firstName: "Harry",
		lastName: "K.",
		country: "Brazil",
		continent: "Americas",
		age: 19,
		language: "Python",
	},
];

console.log(isRubyComing(list3));
