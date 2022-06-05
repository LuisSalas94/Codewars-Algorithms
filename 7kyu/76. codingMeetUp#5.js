/* https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript */
function countLanguages(list) {
	// thank you for checking out the Coding Meetup kata :)
	let languages = [];

	for (let language of list) {
		languages.push(language.language);
	}

	let languagesMap = {};

	for (let lang of languages) {
		if (languagesMap[lang]) {
			languagesMap[lang]++;
		} else {
			languagesMap[lang] = 1;
		}
	}

	return languagesMap;
}

var list1 = [
	{
		firstName: "Noah",
		lastName: "M.",
		country: "Switzerland",
		continent: "Europe",
		age: 19,
		language: "C",
	},
	{
		firstName: "Anna",
		lastName: "R.",
		country: "Liechtenstein",
		continent: "Europe",
		age: 52,
		language: "JavaScript",
	},
	{
		firstName: "Ramon",
		lastName: "R.",
		country: "Paraguay",
		continent: "Americas",
		age: 29,
		language: "Ruby",
	},
	{
		firstName: "George",
		lastName: "B.",
		country: "England",
		continent: "Europe",
		age: 81,
		language: "C",
	},
];

console.log(countLanguages(list1));

/* 
function countLanguages(list) {
  return list.reduce(function(s, c) {
    
    if(c.language in s)
      s[c.language]++;
    else
      s[c.language] = 1;
  
    return s;
  }, {});
}
*/
