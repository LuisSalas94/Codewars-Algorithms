function shorter_reverse_longer(a, b) {
	let shorterLength = Math.min(a.length, b.length);
	let longerLength = Math.max(a.length, b.length);

	if (shorterLength === longerLength) {
		return `${b}${a.split("").reverse().join("")}${b}`;
	}

	let shorter = String([a, b].filter((str) => str.length === shorterLength));
	let longer = String([a, b].filter((str) => str.length === longerLength));

	let result = shorter + longer.split("").reverse().join("") + shorter;

	return result;
}

console.log(shorter_reverse_longer("first", "abcde"));

/* 
var shorter_reverse_longer = function(a,b) {
  var longest = a.length >= b.length ? a : b;
  var shortest = a.length >= b.length ? b : a;
  return shortest + longest.split('').reverse().join('') + shortest;
}


function shorter_reverse_longer(a,b){
  return b.length>a.length?a+[...b].reverse().join('')+a:b+[...a].reverse().join('')+b
}


*/
