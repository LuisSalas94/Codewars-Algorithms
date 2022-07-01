function countSheep(num) {
	if (num === 0) return "";
	let result = "";
	const srt = " sheep...";
	let count = 1;
	while (count <= num) {
		result += `${count}${srt}`;
		count += 1;
	}
	return result;
}

console.log(countSheep(3));
