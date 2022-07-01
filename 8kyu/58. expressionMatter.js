function expressionMatter(a, b, c) {
	const result = [];
	const test1 = a * (b + c);
	result.push(test1);
	const test2 = a * b * c;
	result.push(test2);
	const test3 = a + b * c;
	result.push(test3);
	const test4 = (a + b) * c;
	result.push(test4);
	return Math.max(...result);
}

console.log(expressionMatter(2, 2, 2));
