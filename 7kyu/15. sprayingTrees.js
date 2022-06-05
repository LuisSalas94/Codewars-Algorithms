/* https://www.codewars.com/kata/5981a139f5471fd1b2000071/train/javascript */
function task(weekday, number, cost) {
	let name;

	switch (weekday) {
		case "Monday":
			name = "James";
			break;
		case "Tuesday":
			name = "John";
			break;
		case "Wednesday":
			name = "Robert";
			break;
		case "Thursday":
			name = "Michael";
			break;
		case "Friday":
			name = "William";
			break;
	}

	return `It is ${weekday} today, ${name}, you have to work, you must spray ${number} trees and you need ${
		cost * number
	} dollars to buy liquid`;
}

console.log(task("Wednesday", 10, 2));

/* let task = (w,n,c) => {
  let obj = {'Monday':'James','Tuesday':'John','Wednesday':'Robert','Thursday':'Michael','Friday':'William'};
  return `It is ${w} today, ${obj[w]}, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`;
}; */
