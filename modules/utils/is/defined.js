/**
 * Check if a value is defined (not undefined)
 * 
 * @function isDefined
 * @param {*} value - The value to check
 * @returns {boolean} true if the value is defined (even null), false if undefined
 * 
 * @example
 * isDefined(undefined)  // false
 * isDefined(null)       // true
 * isDefined(0)          // true
 * isDefined('')         // true
 * isDefined(false)      // true
 * isDefined({})         // true
 */
function isDefined(value) {
    return value !== undefined;
}

module.exports = isDefined;
