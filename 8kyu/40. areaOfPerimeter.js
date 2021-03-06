/* 
https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(3, 3) --> 9
*/

const areaOrPerimeter = function (l, w) {
	return l === w ? l * l : (l + w) * 2;
};

console.log(areaOrPerimeter(6, 10));
