/* 
https://www.codewars.com/kata/580a41b6d6df740d6100030c/train/javascript
*/

function alan(x) {
	const stations = [
		"Norwich",
		"Rejection",
		"Disappointment",
		"Backstabbing Central",
		"Shattered Dreams Parkway",
		"London",
	];

	let result = x.toString(" ");

	return result.includes(...stations)
		? "Smell my cheese you mother!"
		: "No, seriously, run. You will miss it.";
}

console.log(alan([]));
