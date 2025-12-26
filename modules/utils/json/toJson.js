/**
 * Convert a JavaScript value to JSON string
 * 
 * @function toJson
 * @param {*} value - The value to serialize
 * @param {Function|Array} [replacer] - Transformation function or array of properties to include
 * @param {number|string} [space] - Number of spaces or string for indentation
 * @returns {string} The formatted JSON string
 * 
 * @example
 * toJson({ name: "John" }) // '{"name":"John"}'
 * toJson({ name: "John" }, null, 2) // With indentation
 * toJson([1, 2, 3]) // '[1,2,3]'
 */
module.exports = function toJson(value, replacer, space) {
    return JSON.stringify(value, replacer, space);
};
