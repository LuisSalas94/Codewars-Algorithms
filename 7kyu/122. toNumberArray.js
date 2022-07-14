function toNumberArray(stringarray) {
	return stringarray.map((item) => eval(item));
}

console.log(toNumberArray(["1.1", "2.2", "3.3"]));
