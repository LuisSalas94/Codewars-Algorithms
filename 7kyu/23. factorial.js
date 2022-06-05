/* https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript */
function factorial(n) {
	if (n === 0) return 1;

	if (n < 0 || n > 12)
		throw new RangeError("The argument must be between 0 and 11.");

	return n * factorial(n - 1);
}

console.log(factorial(3));

/* 
function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}
*/
