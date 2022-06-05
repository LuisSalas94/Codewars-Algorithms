/* 
https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

*/

function sumMix(x) {
	const oldNumbers = x.filter((n) => {
		return typeof n === "number";
	});

	const newNumbers = x
		.filter((n) => {
			return typeof n != "number";
		})
		.map((num) => {
			return parseInt(num);
		});

	let newArr = [...oldNumbers, ...newNumbers].reduce((total, curr) => {
		return total + curr;
	}, 0);

	return newArr;
}

console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));

/* Other solutions 


function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}


function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}










*/
