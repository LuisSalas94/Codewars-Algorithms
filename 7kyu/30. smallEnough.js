/* https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript */
function smallEnough(a, limit) {
	return a.every((ele) => ele <= limit);
}

console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));

/* 
function smallEnough(a, limit){
  return Math.max(...a) <= limit
}
*/
