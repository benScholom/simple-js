import {expect} from 'chai';
import dateDiff from '../../src/date/diff';

describe('dateDiff()', () => {
    it('should return a positive integer when date1 < date2', () => {
      var date1 = new Date('January 24, 1984 09:41:00');
      var date2 = new Date('June 29, 2007 18:45:10');
  
      expect(dateDiff(date1, date2, 'milliseconds')).to.be.above(0);
    });
  
    it('should return a negative integer when date1 > date2', () => {
      var date1 = new Date('June 29, 2007 18:45:10');
      var date2 = new Date('January 24, 1984 09:41:00');
  
      expect(dateDiff(date1, date2, 'milliseconds')).to.not.be.above(0);
    });
  
    it('should return zero when the dates are identical', () => {
      var date1 = new Date('June 29, 2007 18:45:10');
      var date2 = new Date('June 29, 2007 18:45:10');
  
      expect(dateDiff(date1, date2, 'milliseconds')).to.equal(0);
    });
  
    it('should return undefined when either of the first two arguments are not Date objects', () => {
      var date1 = new Date('June 29, 2007 18:45:10');
      var date2 = new Date('June 29, 2007 18:45:10');
  
      expect(dateDiff('June 29, 2007 18:45:10', date2, 'milliseconds')).to.be.undefined;
      expect(dateDiff(date1, 'June 29, 2007 18:45:10', 'milliseconds')).to.be.undefined;
      expect(dateDiff('June 29, 2007 18:45:10', 'June 30, 2007 18:45:10', 'milliseconds')).to.be.undefined;
    });
  
    it('should return result in milliseconds when no time unit is specified', () => {
      var date1 = new Date('January 24, 1984 09:41:00');
      var date2 = new Date('June 29, 2007 18:45:10');
  
      var properResult = dateDiff(date1, date2, 'milliseconds');
  
      expect(dateDiff(date1, date2)).to.equal(properResult);
    });
  
    it('should return result in milliseconds when an unsupported time unit is specified', () => {
      var date1 = new Date('January 24, 1984 09:41:00');
      var date2 = new Date('June 29, 2007 18:45:10');
  
      var properResult = dateDiff(date1, date2, 'milliseconds');
  
      expect(dateDiff(date1, date2, 'centuries')).to.equal(properResult);
    });
  
  });