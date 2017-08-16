import {expect} from 'chai';
import reverseString from '../../src/global/reverseString';

describe('#reverseString()', () => {
	it('should return "!dlrow olleH" if "Hello world!" is passed', () => {
		expect(reverseString('Hello world!')).to.equal('!dlrow olleH');
	})
	it('should return "54321" if "12345" is passed', () => {
		expect(reverseString('12345')).to.equal('54321');
	})
}) 