/* 
https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/javascript
*/
function evenOrOdd(str) {
	const number = str.toString().split("");

	let sumEven = number
		.filter((n) => n % 2 === 0)
		.reduce((total, curr) => total + Number(curr), 0);

	let sumOdd = number
		.filter((n) => n % 2 != 0)
		.reduce((total, curr) => total + Number(curr), 0);

	if (sumEven > sumOdd) {
		return "Even is greater than Odd";
	} else if (sumOdd > sumEven) {
		return "Odd is greater than Even";
	} else if (sumEven === sumOdd) {
		return "Even and Odd are the same";
	}
}

console.log(evenOrOdd("112"));

/* 

function evenOrOdd(str) {
  var odd = str.split('').filter(o => o % 2 != 0).reduce((a,b) => (+a) + (+b));
  var even = str.split('').filter(e => e % 2 == 0).reduce((a,b) => (+a) + (+b));
  if(even > odd) {
    return 'Even is greater than Odd';
  } else if(even < odd) {
    return 'Odd is greater than Even';
  } else {
    return 'Even and Odd are the same';
  }
}
*/
