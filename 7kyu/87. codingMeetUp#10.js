/* https://www.codewars.com/kata/coding-meetup-number-10-higher-order-functions-series-create-usernames */
function addUsername(list) {
	// thank you for checking out the Coding Meetup kata :)
	const Year = new Date().getFullYear();

	return list.map((v) => ({
		...v,
		username: `${v.firstName.toLowerCase()}${v.lastName[0].toLowerCase()}${
			Year - v.age
		}`,
	}));
}

var list1 = [
	{
		firstName: "Emily",
		lastName: "N.",
		country: "Ireland",
		continent: "Europe",
		age: 30,
		language: "Ruby",
	},
	{
		firstName: "Nor",
		lastName: "E.",
		country: "Malaysia",
		continent: "Asia",
		age: 20,
		language: "Clojure",
	},
];

console.log(addUsername(list1));
