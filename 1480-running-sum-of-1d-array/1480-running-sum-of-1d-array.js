/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    let ans = [];
    let sum = 0;
    
    for (let num of nums) {
        sum += num;
        ans.push(sum);
    }
    
    return ans;
    
};