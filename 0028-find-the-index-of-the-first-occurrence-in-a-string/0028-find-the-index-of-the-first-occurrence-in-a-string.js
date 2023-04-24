/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	let firstIndex = -1;

	i = 0;
	for (let letter of haystack) {
		if (haystack.substr(i, needle.length) === needle) {
			firstIndex = i;
			return firstIndex;
		}
		i++;
	}

	return firstIndex;
};