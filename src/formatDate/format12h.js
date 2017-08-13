import getDoubleDigit from './getDoubleDigit';
/**
 * # Formats a date object as a 12 hours time (am/pm).
 */


/**
 * @name format12h
 * @description formats a date object as a 12 hours time (am/pm), with or without seconds (without by default).
 * @param {Date} date
 * @param {bool} withSeconds
 * @returns {string}
 * @example
 * format12h(new Date(2017,06,04,10,45,10)) => 10:45 am
 * format12h(new Date(2017,06,04,23,45,10)) => 11:45 pm
 * format12h(new Date(2017,06,04,23,45,10), true) => 11:45:10 pm
 * @bit
 */
export default function format12h(date, withSeconds = false) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = getDoubleDigit(hours);
    minutes = getDoubleDigit(minutes);
    seconds = getDoubleDigit(seconds);
    const strTime = hours + ':' + minutes + (withSeconds ? ':' + seconds : '') + ' ' + ampm;
    return strTime;
};