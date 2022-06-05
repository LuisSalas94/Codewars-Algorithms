function sumOfIntegersInString(s) {
	let str = s
		.split(" ")
		.map((e) => Number(e))
		.filter((e) => e)
		.reduce((total, curr) => total + curr, 0);
	str;

	//NO YET DONE

	/* return s
		.split("")
		.map((e) => Number(e))
		.filter((e) => e)
		.reduce((total, curr) => total + curr, 0); */
}

console.log(sumOfIntegersInString("C4t5 are 4m4z1ng."));
