/* https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript */
function lastSurvivor(letters, coords) {
	if (coords.length === 0) return letters;

	let newLetters = letters.toString().split("");

	for (let i = 0; i < coords.length; i++) {
		newLetters.splice(coords[i], 1);
	}

	return newLetters.toString();
}

console.log(lastSurvivor("abc", [1, 1]));
