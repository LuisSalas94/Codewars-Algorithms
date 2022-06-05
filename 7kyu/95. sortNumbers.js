/* https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript */
function solution(nums) {
	return !nums || nums === null ? [] : nums.sort((a, b) => a - b);
}

console.log(solution([1, 2, 3, 10, 5]));
