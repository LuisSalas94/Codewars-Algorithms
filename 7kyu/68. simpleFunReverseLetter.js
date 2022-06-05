/* https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript */
function reverseLetter(str) {
	return str
		.replace(/[^A-Za-z0-9]/g, "")
		.replace(/[0-9]/g, "")
		.split("")
		.reverse("")
		.join("");
}

console.log(reverseLetter("ab23c"));
