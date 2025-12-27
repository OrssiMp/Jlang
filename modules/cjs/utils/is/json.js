/**
 * Check if a string is valid JSON
 * 
 * @function isJson
 * @param {string} str - The string to check
 * @returns {boolean} true if the string is valid JSON, false otherwise
 * 
 * @example
 * // Valid JSON strings
 * isJson('{"name":"John"}')    // true
 * isJson('[1, 2, 3]')          // true
 * isJson('true')               // true
 * isJson('null')               // true
 * isJson('42')                 // true
 * 
 * @example
 * // Invalid JSON strings
 * isJson('not json')           // false
 * isJson('')                   // false
 * isJson('{name: "John"}')     // false (missing quotes)
 * isJson('{"name": "John"')    // false (unclosed)
 * 
 * @example
 * // Non-string inputs
 * isJson(null)                 // false
 * isJson(123)                  // false
 * isJson({})                   // false
 */
module.exports = function isJson(str) {
    if (typeof str !== 'string') {
        return false;
    }
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};
