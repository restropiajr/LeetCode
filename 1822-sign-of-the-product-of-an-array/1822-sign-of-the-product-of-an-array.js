/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
        
    const newNums = nums.map(x => {
         if (x > 0) {
            return 1;
        } else if (x < 0) {
            return -1;
        } else if (x === 0) {
            return 0;
        } 
    })
    
    const product = newNums.reduce((accumulator, currentValue) => accumulator * currentValue);

    
    function signFunc(product) {
        if (product > 0) {
            return 1;
        } else if (product < 0) {
            return -1;
        } else if (product === 0) {
            return 0;
        }
    }
    
    return signFunc(product);
};