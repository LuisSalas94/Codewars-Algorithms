/* 
https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

1 - 2 good ideas  -> 'Publish'
3 or more -> 'I smell a series!'
0 good ideas -> 'Fail!'

*/

function well(x) {
	let ideasMap = {};
	for (let ar of x) {
		if (!ideasMap[ar]) {
			ideasMap[ar] = 1;
		} else {
			ideasMap[ar]++;
		}
	}

	let { good } = ideasMap;

	if (good >= 3) {
		return "I smell a series!";
	} else if (good >= 1 && good <= 2) {
		return "Publish";
	} else if (!good) {
		return "Fail!";
	}
}

console.log(well(["bad", "bad", "bad"]));

/* 
function well(x) {
  const count = x.reduce((s, v) => s + (v == 'good'), 0);
  return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}


const  well = x => {
  let count = x.filter(el => el == 'good').length
  return  count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!'; 
}


function well(x){
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good') {
      count++;
      if (count == 3)
        break;
    }
  }
  return ['Fail!', 'Publish!', 'Publish!', 'I smell a series!'][count]
}


const well = x =>
  (val => val ? val > 2 ? `I smell a series!` : `Publish!` : `Fail!`)
  (x.filter(val => val === `good`).length);


*/
