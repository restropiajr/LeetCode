/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    
    let count = 0;
    
    for (const num of nums) {
        const numberOfDigits = num.toString().length;
        if (numberOfDigits % 2 === 0) {
            count++;
        }
    }
    return count;
    
};