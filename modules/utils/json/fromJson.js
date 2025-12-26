/**
 * Convert a JSON string to JavaScript value
 * 
 * @function fromJson
 * @param {string} jsonString - The JSON string to parse
 * @param {Function} [reviver] - Optional transformation function
 * @returns {*} The corresponding JavaScript value
 * @throws {SyntaxError} If the string is not valid JSON
 * @throws {TypeError} If the provided value is not a string
 * 
 * @example
 * fromJson('{"name":"John"}')  // {name: "John"}
 * fromJson('[1, 2, 3]')         // [1, 2, 3]
 * fromJson('true')              // true
 */
module.exports = function fromJson(jsonString, reviver) {
    if (typeof jsonString !== 'string') {
        throw new TypeError('The provided value must be a string');
    }
    return JSON.parse(jsonString, reviver);
};
