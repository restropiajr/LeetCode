/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
   let booleanArr = new Array(candies.length).fill(false);

	const max = Math.max(...candies);

	const newCandies = candies.map((kid) => kid + extraCandies);

	let i = 0;
	for (const kid of newCandies) {
		if (kid >= max) {
			booleanArr[i] = true;
		}
		i++;
	}
	return booleanArr;
    
};