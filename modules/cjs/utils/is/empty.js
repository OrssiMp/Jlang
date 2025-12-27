/**
 * Check if a value is empty (null, undefined, empty string/array/object)
 * 
 * @function isEmpty
 * @param {*} value - The value to check
 * @returns {boolean} true if the value is empty, null or undefined
 * 
 * @example
 * isEmpty(null) //
 * isEmpty(undefined) // true
 * isEmpty('') // true
 * isEmpty([]) // true
 * isEmpty({}) // true
 * isEmpty(0) // false
 * isEmpty(false) // false
 * isEmpty('hello') // false
 * you can use that whith "is" is.isEmpty()
 */
module.exports = function isEmpty(value) {
    // Check if value is null or undefined
    if (value == null) {
        return true;
    }

    // Check empty arrays and strings
    if (Array.isArray(value) || typeof value === 'string') {
        return value.length === 0;
    }

    // Check empty objects
    if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    }

    // For other types (numbers, booleans, etc.)
    return false;
};