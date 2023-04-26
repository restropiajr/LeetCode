/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
	let isBulky = null;
	let isHeavy = null;
	let result = null;

	if (
		length >= 10 ** 4 ||
		width >= 10 ** 4 ||
		height >= 10 ** 4 ||
		length * width * height >= 10 ** 9
	) {
		isBulky = true;
	} else {
		isBulky = false;
	}

	if (mass >= 100) {
		isHeavy = true;
	} else {
		isHeavy = false;
	}

	if (isBulky === true && isHeavy === true) {
		result = "Both";
	} else if (isBulky === false && isHeavy === false) {
		result = "Neither";
	} else if (isBulky === true && isHeavy === false) {
		result = "Bulky";
	} else if (isBulky === false && isHeavy === true) {
		result = "Heavy";
	}

	return result;
};