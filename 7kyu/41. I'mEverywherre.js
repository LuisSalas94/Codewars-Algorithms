/* https://www.codewars.com/kata/6097a9f20d32c2000d0bdb98/train/javascript */

function every(word) {
	/* The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant) */
	//Number of consonants and vowels

	if (!word) return "Invalid word";

	let numberOfVowels = word.match(/[aeiou]/g).length;

	let numberOfConsonants = word.length - numberOfVowels;

	if (numberOfVowels >= numberOfConsonants) return "Invalid word";

	if (
		word[0].toUpperCase() === "I" ||
		word[0] === word[0].toLowerCase() ||
		word[0] === "i"
	) {
		return "Invalid word";
	} else {
		return "i".concat(word);
	}
}

console.log(every("iEast"));
