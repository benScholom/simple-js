import {expect} from 'chai';
import format12h from '../../src/formatDate/format12h';

describe('format-12h', () => {
    it('should return formatted time with am for 1-11 hours', () => {
        const date = new Date(2017, 6, 4, 3, 25, 12);
        expect(format12h(date)).to.eql('03:25 am');
    });

    it('should return formatted time with 12 am for 0 hours', () => {
        const date = new Date(2017, 6, 4, 0, 25, 12);
        expect(format12h(date)).to.eql('12:25 am');
    });

    it('should return formatted time with pm for 12-23 hours', () => {
        const date = new Date(2017, 6, 4, 15, 25, 12);
        expect(format12h(date)).to.eql('03:25 pm');
    });

    it('should return single digits with leading zeros', () => {
        const date = new Date(2017, 6, 4, 3, 1, 2);
        expect(format12h(date, true)).to.eql('03:01:02 am');
    });

    it('should return formatted time without seconds when not specified otherwise', () => {
        const date = new Date(2017, 6, 4, 3, 25, 12);
        expect(format12h(date)).to.eql('03:25 am');
    });

    it('should return formatted time with seconds when specified', () => {
        const date = new Date(2017, 6, 4, 3, 25, 12);
        expect(format12h(date, true)).to.eql('03:25:12 am');
    });
});