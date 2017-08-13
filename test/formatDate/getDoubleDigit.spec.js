import {expect} from 'chai';
import getDoubleDigit from '../../src/formatDate/getDoubleDigit';

describe('getDoubleDigit', () => {
    it('should return same number for a double digit number', () => {
        const num = 24;
        expect(getDoubleDigit(num)).to.eql(num);
    });

    it('should return same number for a triple digit number', () => {
        const num = 245;
        expect(getDoubleDigit(num)).to.eql(num);
    });

    it('should return number with leading zero for a single digit number', () => {
        const num = 2;
        expect(getDoubleDigit(num)).to.eql('02');
    });

    it('should return same number for a negative number', () => {
        const num = -2;
        expect(getDoubleDigit(num)).to.eql(num);
    });

    it('should return number with leading zero for a single digit number, served as a string', () => {
        const num = '2';
        expect(getDoubleDigit(num)).to.eql('02');
    });

    it('should not try to change argument if it`s not a number', () => {
        const num = { bla: 24 };
        expect(getDoubleDigit(num)).to.deep.eql(num);
    });
});