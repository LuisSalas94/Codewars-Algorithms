/* https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript */

function accum(s) {
	let str = s
		.split("")
		.map((char, index) => {
			return char.toUpperCase() + char.toLowerCase().repeat(index);
		})
		.join("-");
	str;
}

console.log(accum("abcd"));

/* 
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

/* 
function accum(s) {
	let str = "";

	for (let i = 0; i < s.length; i++) {
		let addStr = "";
		for (let j = 0; j < i + 1; j++) {
			addStr += s[i];
		}
		addStr = addStr.toLowerCase();
		addStr = addStr.charAt(0).toUpperCase() + addStr.slice(1);
		if (i < s.length - 1) addStr += "-";
		str += addStr;
	}

	return str;
}



function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

*/
