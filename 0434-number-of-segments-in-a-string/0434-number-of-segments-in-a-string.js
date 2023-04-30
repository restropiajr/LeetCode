/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    
    const strSplit = s.split(" ");
    const numOfSegments = strSplit.filter(x => x !== "");
    return numOfSegments.length;
    
    

    
    
};