/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	let trimmedStr = s.trim();

	let splitStr = trimmedStr.split(" ");

	let newArr = [];

	for (let word of splitStr) {
		if (word !== "") {
			newArr.push(word);
		}
	}

	let lastWord = newArr.pop();
	return lastWord.length;
};