/* https://www.codewars.com/kata/583d972b8bbc0402cf000121/train/javascript */
function askForMissingDetails(list) {
	if (!list) {
		return [];
	}

	const arr = [];

	for (const item of list) {
		for (const [key, value] of Object.entries(item)) {
			if (value === null) {
				item["question"] = `Hi, could you please provide your ${key}.`;
				arr.push(item);
			}
		}
	}

	return arr;
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

console.log(askForMissingDetails());
