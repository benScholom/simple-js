/**
 * @bit
 * @name reverseString
 * @description reverses the given string
 * @param {string} str the string
 * @returns {string} the reversed string
 * @example
 * reverseString('Hello world') // => "dlrow olleH"
 */
export default function reverseString(str) {
	var split = str.split("");
	var reverse = split.reverse();
	var join = reverse.join("");

	return join;
};