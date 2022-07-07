/* https://www.codewars.com/kata/56b8903933dbe5831e000c76/train/javascript */

function spoonerize(words) {
	words = words.split(" ");
	return `${words[0].replace(words[0][0], words[1][0])} ${words[1].replace(
		words[1][0],
		words[0][0]
	)}`;
}

console.log(spoonerize("wedding bells"));
