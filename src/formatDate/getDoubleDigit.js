/**
 * # Returns a number as at least a two-digits number (with leading zero if required).
 * @name getDoubleDigit
 * @param {number} num
 * @returns {string}
 * @example
 * getDoubleDigit(24) => 24
 * getDoubleDigit(245) => 245
 * getDoubleDigit(2) => 02
 * @bit
 */
export default function getDoubleDigit(num) {
    if (typeof num === 'string')
        num = parseInt(num);

    if (typeof num !== 'number') {
        console.error('Invalid argument: num should be a string or a number');
        return num;
    }

    if (num < 0) {
        console.error('Invalid argument: num should be a non-negative number');
        return num;
    }

    return num < 10 ? '0' + num : num;
};