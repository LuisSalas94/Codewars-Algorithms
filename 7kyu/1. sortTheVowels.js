/* 
https://www.codewars.com/kata/59e49b2afc3c494d5d00002a

*/

function sortVowels(s) {
	if (s === undefined || s === null || typeof s === "number") return "";

	//vowels
	let vowels = "";
	let letters = "";

	for (let word of s) {
		if (!isVowel(word)) {
			return `${word}|\n`;
		} else {
			return `|${word}`;
		}
	}

	//check for vowels
	function isVowel(c) {
		return ["a", "e", "i", "o", "u"].indexOf(c.toLowerCase()) !== -1;
	}
}

console.log(sortVowels("Codewars"));

/* ******************************************************* */
/* let words = "aeiou";

let newWords = "";

function isVowelOrNot(words) {
	for (let word of words) {
		if (
			word === "a" ||
			word === "e" ||
			word === "i" ||
			word === "o" ||
			word === "u"
		) {
			newWords = newWords + word;
			newWords;
		}
	}
	return newWords === words ? true : false;
}

let result = isVowelOrNot(words);
 */

const t = "aeaiou";
const x = "codewars";
