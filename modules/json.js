/**
 * json module - JSON parsing and stringification utilities
 * Provides functions to safely convert between JavaScript objects and JSON strings
 * 
 * @module json
 * @requires ./utils/json/toJson
 * @requires ./utils/json/fromJson
 */

const toJson = require('./utils/json/toJson');
const fromJson = require('./utils/json/fromJson');

/**
 * Object containing all JSON utility functions with aliases for compatibility
 * @namespace Json
 */

module.exports = {
    /**
     * Convert JavaScript value to JSON string
     * @function toJson
     * @param {*} value - Value to convert to JSON
     * @param {number|string} [space] - Optional spacing for pretty printing
     * @returns {string} JSON string representation of the value
     * @throws {Error} If value contains circular references or non-serializable data
     * @example
     * json.toJson({ name: 'John', age: 30 }) // '{"name":"John","age":30}'
     * json.toJson({ a: 1 }, 2) // '{\n  "a": 1\n}'
     */
    toJson,
    
    /**
     * Parse JSON string to JavaScript object
     * @function fromJson
     * @param {string} str - JSON string to parse
     * @returns {*} Parsed JavaScript value
     * @throws {SyntaxError} If string is not valid JSON
     * @example
     * json.fromJson('{"name":"John"}') // { name: 'John' }
     * json.fromJson('[1,2,3]') // [1, 2, 3]
     */
    fromJson
};

// Add aliases for backward compatibility with native JSON methods
module.exports.stringify = toJson;
module.exports.parse = fromJson;
