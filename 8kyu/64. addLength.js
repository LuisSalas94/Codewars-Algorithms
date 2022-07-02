function addLength(str) {
	const newStr = str.split(" ");
	const result = [];
	for (const char of newStr) {
		result.push(char + " " + char.length);
	}
	return result;
}

console.log(addLength("you will win"));
