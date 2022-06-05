/* https://www.codewars.com/kata/coding-meetup-number-12-higher-order-functions-series-find-github-admins */
function findAdmin(list, lang) {
	return list.filter(
		(dev) => dev.language === lang && dev.githubAdmin === "yes"
	);
}

var list1 = [
	{
		firstName: "Harry",
		lastName: "K.",
		country: "Brazil",
		continent: "Americas",
		age: 22,
		language: "JavaScript",
		githubAdmin: "yes",
	},
	{
		firstName: "Kseniya",
		lastName: "T.",
		country: "Belarus",
		continent: "Europe",
		age: 49,
		language: "Ruby",
		githubAdmin: "no",
	},
	{
		firstName: "Jing",
		lastName: "X.",
		country: "China",
		continent: "Asia",
		age: 34,
		language: "JavaScript",
		githubAdmin: "yes",
	},
	{
		firstName: "Piotr",
		lastName: "B.",
		country: "Poland",
		continent: "Europe",
		age: 128,
		language: "JavaScript",
		githubAdmin: "no",
	},
];

console.log(findAdmin(list1, "JavaScript"));
