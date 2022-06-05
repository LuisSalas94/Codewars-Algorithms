/* https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript */

function fizzbuzz(n) {
	let result = [];

	for (let i = 1; i <= n; i++) {
		if (i % 15 === 0) {
			result.push("FizzBuzz");
		} else if (i % 3 === 0) {
			result.push("Fizz");
		} else if (i % 5 === 0) {
			result.push("Buzz");
		} else {
			result.push(i);
		}
	}

	return result;
}

console.log(fizzbuzz(1));

/* 
var fizzify = fizzbuzz = function(n)
{
  return Array.apply(null, new Array(n)).map(function(e, i){
    return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
  }); 
}

function fizzbuzz(n) {
  return [...Array(n+1).keys()].slice(1).map(x=>x%15===0?'FizzBuzz':x%3===0?'Fizz':x%5===0?'Buzz':x);
}

const fizzbuzz = (n)=> 
                Array.from({length: n}, (_,i)=> i+1)
                  .map( el=> el % 3 === 0  && el % 5 === 0 ? 'FizzBuzz' : 
                        el % 3 === 0 ? 'Fizz' : el % 5 === 0 ? 'Buzz' : el )


*/
