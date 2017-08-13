import {expect} from 'chai';
import cloneDataObject from '../../src/global/cloneDataObject';

describe('cloneDataObject', () => {
    it('should return undefined if original is undefined', () => {
        const original = undefined;
        const clone = cloneDataObject(original);

        expect(clone).to.be.undefined;
    });

    it('should return a copy of the object with its first-level properties', () => {
        const original = {
            x: 1,
            y: 'test'
        };
        const clone = cloneDataObject(original);

        expect(clone).to.deep.equal(original);
    });

    it('should return a deep copy of the object with its second-level properties', () => {
        const original = {
            x: 1,
            y: 'test',
            complex: {
                deep1: 65,
                deep2: 'test2'
            }
        };
        const clone = cloneDataObject(original);

        expect(clone).to.deep.equal(original);
    });
});