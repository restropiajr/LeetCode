/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
    let balance = 0;
    let count = 0;
    
    for (const letter of s) {
        
        if (letter === "L") {
            balance++;
        } else {
            balance--
        }
        
        if (balance === 0) {
            count++;
        }
        
    }
    
    return count;
    
};