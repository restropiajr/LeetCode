/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    
  let result = 0;

	for (let words of sentences) {
		let wordArr = words.split(" ");
		let totalWords = wordArr.length;
		if (totalWords > result) {
			result = totalWords;
		}
	}
	return result;
}
    