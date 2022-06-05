/* https://www.codewars.com/kata/5809b62808ad92e31b000031/train/javascript */

function calculate(str) {
	let newS = String(
		str.replace(/plus/g, "+").replace(/minus/g, "-").split(" ")
	);

	return String(eval(newS));
}

console.log(calculate("1plus2plus3minus4"));
