/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
	while (num >= 10) {
		let sum = 0;

		let numStr = num.toString();
		
		for (let digit of numStr) {
			sum += parseInt(digit);
		}

		num = sum;
	}
	return num;
};