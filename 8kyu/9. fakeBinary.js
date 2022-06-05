/* 
https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

  Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

*/

function fakeBin(x) {
	let newX = [];

	for (let num of x) {
		if (num < 5) {
			newX.push(0);
		} else {
			newX.push(1);
		}
	}

	return newX.toString().replace(/,/g, "");
}

fakeBin("45385593107843568");
//'01011110001100111'

/* 
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


function fakeBin(x){
  return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
}

function fakeBin(x){
  return x.split('').map(a => a < '5' ? "0" : "1").join("");
}

*/
