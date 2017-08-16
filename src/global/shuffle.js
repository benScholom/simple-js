/**
 * @bit
 * @name shuffle
 * @description randomly shuffles an array using Fisher-Yates algorithm
 * @param {[]]} arr the array
 * @returns {[]} the shuffled array
 * @example
 * shuffle([1, 2, 3, 4, 5]) // => [2, 4, 1, 5, 3]
 */
export default function shuffle(arr) {
	var curr = arr.length;
	var temp, rand;

	while (curr != 0) {
		rand = Math.floor(Math.random() * curr);
		curr--;

		temp = arr[curr];
		arr[curr] = arr[rand];
		arr[rand] = temp;
	}

	return arr;
};