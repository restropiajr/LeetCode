/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let sortedArr = nums.sort();
    
    let ans = 0;
        
    for (let num of sortedArr) {
        ans ^= num;
    }
    return ans;
};