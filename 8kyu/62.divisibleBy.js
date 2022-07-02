function divisibleBy(numbers, divisor) {
	return numbers.filter((num) => num % divisor === 0);
}

console.log(divisibleBy([1, 3, 5], 2));
