/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let zerosCount = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			i--;
			zerosCount++;
		}
	}

	for (let i = 0; i < zerosCount; i++) {
		nums.push(0);
	}

	return nums;
};