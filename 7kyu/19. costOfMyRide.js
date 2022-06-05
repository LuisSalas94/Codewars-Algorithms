/* https://www.codewars.com/kata/586430a5b3a675296a000395/train/javascript */

function insurance(age, size, days) {
	if (days < 1) return 0;

	let carSurcharge = 0;

	switch (size) {
		case "economy":
			carSurcharge = 0;
			break;
		case "medium":
			carSurcharge = 10;
			break;
		case "full-size":
			carSurcharge = 15;
			break;
		default:
			carSurcharge = 15;
	}

	return age < 25
		? 50 * days + days * 10 + days * carSurcharge
		: 50 * days + days * carSurcharge;
}

console.log(insurance(42, "my custom car", 7));

/* 
function insurance(age, size, numofdays){
  let ageCharge = age < 25 ? 10 : 0
  let sizeCharge = size === 'economy' ? 0 : (size === 'medium' ? 10 : 15)
  return numofdays < 0 ? 0 : (50 + ageCharge + sizeCharge) * numofdays
}
*/
