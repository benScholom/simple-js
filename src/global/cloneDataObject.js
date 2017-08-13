/**
 * # Clones a data object.
 * Object properties will be copied, but functions won't be duplicated.
 * @bit
 */

/**
 * @name cloneDataObject
 * @param {*} original
 * @returns {*}
 * @bit
 */
export default function cloneDataObject(original) {
    if (original == undefined)
        return undefined;
    
    var clone = JSON.parse(JSON.stringify(original));
    return clone;
};