function array(arr) {
	const length = arr.length;
	if (length == 0 || length == 1 || length == 3) return null;
	let str = arr.split("");
	str.shift();
	str.pop();
	let newStr = String(str).replace(/,/g, "");
	let result = "";
	for (const char of newStr) {
		result += char;
		result += " ";
	}

	return result.replace(/\s+$/, "");
}

console.log(array("1,2,3,4"));
