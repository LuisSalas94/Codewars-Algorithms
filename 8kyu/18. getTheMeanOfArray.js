/* 
https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

DONE

*/

function getAverage(marks) {
	//TODO : calculate the downward rounded average of the marks array
	let result = 0;

	let length = marks.length;

	result = marks.reduce((total, curr) => {
		return total + curr;
	}, 0);

	result = Math.floor(result / length);

	return result;
}

getAverage([1, 2, 3, 4, 5]);
