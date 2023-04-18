/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    
   const index = ["type", "color", "name"];
   
   const ruleKeyIndex = index.indexOf(ruleKey);
    
    let count = 0;
    
    for (let item of items) {
        if (item[ruleKeyIndex] === ruleValue) {
            count++
        }
    }
    
    return count; 
    
};