/**
 * Check if a value is an array
 * 
 * @function isArray
 * @param {*} value - The value to test
 * @param {boolean} [allowEmpty=true] - If false, also checks that the array is not empty
 * @returns {boolean} true if the value is an array (and not empty if allowEmpty is false)
 * 
 * @example
 * // Basic array checking
 * isArray([1, 2, 3])           // true
 * isArray([])                  // true
 * isArray(new Array())         // true
 * 
 * @example
 * // With allowEmpty set to false
 * isArray([1, 2, 3], false)   // true
 * isArray([], false)           // false
 * 
 * @example
 * // Non-array values
 * isArray('string')            // false
 * isArray({})                  // false
 * isArray(null)                // false
 * isArray(undefined)           // false
 * isArray(123)                 // false
 * isArray(() => {})            // false
 */
module.exports = function isArray(value, allowEmpty = true) {
    if (!Array.isArray(value)) {
        return false;
    }
    return allowEmpty ? true : value.length > 0;
};
