/* https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript */
function createPhoneNumber(numbers) {
	let code = numbers.slice(0, 3).join("");
	code = "(" + code + ")";
	let middle = numbers.slice(3, 6).join("");
	let last = numbers.slice(-4).join("");

	return `${code} ${middle}-${last}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/* 
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
*/
