/**
 * Check if a string contains one or more alphabetic characters
 * 
 * @function alpha
 * @param {string} value - The string to check
 * @returns {boolean} true if the string contains one or more letters, false otherwise
 * 
 * @example
 * alpha('abc123') // true
 * alpha('123') // false
 * alpha('hello world') // true
 * alpha('!@#$') // false
 */
module.exports = function alpha(value) {
    return /[a-zA-Z]/.test(value);
}
    
