/* https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript */
function printArray(array) {
	//show me the code!
	let newStr = "";
	for (str of array) {
		newStr += str;
	}

	return newStr.split("").join();
}

console.log(printArray([2, 4.2, 5.1, 2.2]));
