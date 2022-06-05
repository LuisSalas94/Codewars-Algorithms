/* https://www.codewars.com/kata/57f604a21bd4fe771b00009c/train/javascript */
function meeting(x) {
	for (let i = 0; i < x.length; i++) {
		if (x[i] === "O") return i;
	}
	return "None available!";
}

console.log(meeting(["X", "X", "X", "X", "X"]));
