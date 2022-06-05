let counter = 0;
let tempArr = [0, 1, 2, 3, 4, 5, 6];
let sum = 0;
let n = 2;

while (counter < n) {
	sum = sum + tempArr.reduce((a, b) => a + b, 0);
	tempArr.pop();
	tempArr = tempArr.map((num) => num + 2);
	sum = sum + tempArr.reduce((a, b) => a + b, 0);
	counter++;
}

sum;
