/**
 * @param {number} n
 * @return {number}
 */

var subtractProductAndSum = function(n) {
    const nStr = n.toString();
    const nStrArr = nStr.split("");
    const numArr = nStrArr.map(x => Number(x));
    
    const product = numArr.reduce((acc,value) => acc * value);
    const sum = numArr.reduce((acc,value) => acc + value);
    
    return product-sum;
};