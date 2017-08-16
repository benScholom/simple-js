/**
 * @bit
 * @name dateDiff
 * @description Calculates the time difference between two date objects in the provided time unit. Rounds decimals. Supports milliseconds, seconds, minutes, hours, days, weeks, months, and years.
 * @param {Object} date1 The first date
 * @param {Object} date2 The second date
 * @param {string} unit (optional) The unit to use. Defaults to milliseconds
 * @returns {number} The time difference
 * @example
 * var date1 = new Date('July 1, 1989 09:41:00);
 * var date2 = new Date('June 29, 2011 18:45:10');
 * 
 * dateDiff(date1, date2, 'milliseconds'); // => 694083850000
 * dateDiff(date1, date2, 'seconds');      // => 694083850
 * dateDiff(date1, date2, 'minutes');      // => 11568064
 * dateDiff(date1, date2, 'hours');        // => 192801
 * dateDiff(date1, date2, 'days');         // => 8033
 * dateDiff(date1, date2, 'weeks');        // => 1148
 * dateDiff(date1, date2, 'months');       // => 263
 * dateDiff(date1, date2, 'years');        // => 22
 *
 * dateDiff(date1, date2);                 // => 694083850000
 * dateDiff('Not a date');                 // => undefined (Incorrect input types)
 */
export default function dateDiff(date1, date2, unit) {
	if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
		return(undefined);
	}

	// Convert to UTC to account for DST
	var UTCdate1 = new Date(date1);
	var UTCdate2 = new Date(date2);
	UTCdate1.setMinutes(UTCdate1.getMinutes() - UTCdate1.getTimezoneOffset());
	UTCdate2.setMinutes(UTCdate2.getMinutes() - UTCdate2.getTimezoneOffset());

	// Calculate difference in milliseconds (always positive)
	var diffMilliseconds = UTCdate2.getTime() - UTCdate1.getTime();
	
	// Calculate differences for each time unit
	switch (unit) {
		case 'milliseconds':
			return diffMilliseconds;
			break;
		case 'seconds':
			var diffSeconds = Math.round(diffMilliseconds / (1000));
			return diffSeconds;
			break;
		case 'minutes':
			var diffMinutes = Math.round(diffMilliseconds / (1000*60));
			return diffMinutes;
			break;
		case 'hours':
			var diffHours = Math.round(diffMilliseconds / (1000*60*60));
			return diffHours;
			break;
		case 'days':
			var diffDays = Math.round(diffMilliseconds / (1000*60*60*24));
			return diffDays;
		case 'weeks':
			var diffWeeks = Math.round(diffMilliseconds / (1000*60*60*24*7));
			return diffWeeks;
			break;
		case 'months':
			var month1 = UTCdate1.getMonth();
			var month2 = UTCdate2.getMonth();

			var year1 = UTCdate1.getFullYear();
			var year2 = UTCdate2.getFullYear();

			var totalMonth1 = month1 + (year1*12);
			var totalMonth2 = month2 + (year2*12);

			var diffMonths = Math.round(totalMonth2 - totalMonth1);
			return diffMonths;
			break;
		case 'years':
			var year1 = UTCdate1.getFullYear();
			var year2 = UTCdate2.getFullYear();

			var diffYears = Math.round(year2-year1);
			return diffYears;
			break;

		// If no unit is passed, default to return milliseconds
		default:
			return diffMilliseconds;
	}
};