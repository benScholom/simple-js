import {expect} from 'chai';
import dateAdd from '../../src/time/dateAdd';

describe('dateAdd()', () => {
  it('should return a date in the future when current date is passed with a positive increment', () => {
    var currDate = new Date();
    var newDate = dateAdd(currDate, 5000, 'milliseconds');

    expect(newDate).to.be.above(currDate);
  });
  
  it('should return a date in the past when current date is passed with a negative increment', () => {
    var currDate = new Date();
    var newDate = dateAdd(currDate, -5000, 'milliseconds');

    expect(currDate).to.be.above(newDate);
  });

  it('should return an identical date when the increment is 0', () => {
    var currDate = new Date();
    var newDate = dateAdd(currDate, 0, 'milliseconds');

    expect(currDate.getTime()).to.equal(newDate.getTime());
  });

  it('should default to milliseconds when no time unit is specified', () => {
    var currDate = new Date();
    var newDate = dateAdd(currDate, 5000, 'milliseconds');
    var newerDate = dateAdd(currDate, 5000);

    expect(newDate.getTime()).to.equal(newerDate.getTime());
  });

  it('should default to milliseconds when an unsupported time unit is specified', () => {
    var currDate = new Date();
    var newDate = dateAdd(currDate, 5000, 'milliseconds');
    var newerDate = dateAdd(currDate, 5000, 'madeupunit');

    expect(newDate.getTime()).to.equal(newerDate.getTime());
  });

  it('should retain the time but increment the date when passing through daylight saving time for units of days and above', () => {
    var date = new Date('March 24, 2017 00:00:00');
    var correctDate = new Date('March 25, 2017 00:00:00');

    var newDate = dateAdd(date, 1, 'days');

    expect(newDate.getTime()).to.equal(correctDate.getTime());
  });

  it('should return undefined when the first argument is not a Date object', () => {
    var test = 'a date';
    expect(dateAdd(test, 10, 'seconds')).to.be.undefined;
  });

  it('should properly handle leap years when incrementing Feb 29th date to non leap year', () => {
    var leapDate = new Date('February 29, 2016 12:12:12');
    var nonLeapYear = dateAdd(leapDate, 2, 'years');
    var correctDate = new Date('February 28, 2018 12:12:12');

    expect(correctDate.getTime()).to.equal(nonLeapYear.getTime());
  });

  it('should properly handle leap years when incrementing Feb 29th date to other leap year', () => {
    var leapDate = new Date('February 29, 2016 12:12:12');
    var nonLeapYear = dateAdd(leapDate, 4, 'years');
    var correctDate = new Date('February 29, 2020 12:12:12');

    expect(correctDate.getTime()).to.equal(nonLeapYear.getTime());
  });

  it("should revert to last day of month when incrementing to month that doesn't contain current day", () => {
    var longMonth = new Date('January 31, 2017 12:12:12');
    var shortMonth = new Date('February 28, 2017 12:12:12');

    var realDate = dateAdd(longMonth, 1, 'months');
  });
});