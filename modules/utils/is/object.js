const array = require("./array");
/**
 * Check if a value is an object (excluding arrays and null)
 * 
 * @function isObject
 * @param {*} value - The value to check
 * @returns {boolean} true if the value is an object, false otherwise
 * 
 * @example
 * // Valid objects
 * isObject({})                    // true
 * isObject({ name: 'John' })      // true
 * isObject(new Date())            // true
 * isObject(/regex/)               // true
 * 
 * @example
 * // Not objects
 * isObject([])                    // false (array)
 * isObject(null)                  // false
 * isObject(undefined)             // false
 * isObject('string')               // false
 * isObject(123)                    // false
 * isObject(true)                  // false
 * isObject(() => {})              // false (function)
 */
module.exports = function isObject(value) {
    return value !== null && typeof value === 'object' && !array(value);
};