function findOddNames(list) {
	// thank you for checking out the Coding Meetup kata :)
	const arr = [];

	for (const item of list) {
		for (const [key, value] of Object.entries(item)) {
			if (key === "firstName") {
				arr.push(value);
			}
		}
	}

	const arr2 = [];
	const arr3 = [];

	const StringToASCII = (str) => [...str].map((char) => char.charCodeAt(0));
	for (const name of arr) {
		arr2.push(StringToASCII(name));
		for (const num of arr2) {
			arr3.push(num.reduce((a, b) => a + b, 0));
		}
	}
}
const list1 = [
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

findOddNames(list1);
