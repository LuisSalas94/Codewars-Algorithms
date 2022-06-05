/* https://www.codewars.com/kata/coding-meetup-number-14-higher-order-functions-series-order-the-food */
function orderFood(list) {
	let foodMap = {};

	list.forEach((dev) =>
		foodMap[dev.meal] ? foodMap[dev.meal]++ : (foodMap[dev.meal] = 1)
	);

	return foodMap;
}

var list1 = [
	{
		firstName: "Noah",
		lastName: "M.",
		country: "Switzerland",
		continent: "Europe",
		age: 19,
		language: "C",
		meal: "vegetarian",
	},
	{
		firstName: "Anna",
		lastName: "R.",
		country: "Liechtenstein",
		continent: "Europe",
		age: 52,
		language: "JavaScript",
		meal: "standard",
	},
	{
		firstName: "Ramona",
		lastName: "R.",
		country: "Paraguay",
		continent: "Americas",
		age: 29,
		language: "Ruby",
		meal: "vegan",
	},
	{
		firstName: "George",
		lastName: "B.",
		country: "England",
		continent: "Europe",
		age: 81,
		language: "C",
		meal: "vegetarian",
	},
];

console.log(orderFood(list1));
