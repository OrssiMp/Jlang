const { isArray, isObject } = require("./is");

/**
 * Returns the length of an array or the number of properties of an object
 * 
 * @function len
 * @param {Array|Object} params - The array or object to measure
 * @returns {number} The total count of elements or properties
 * 
 * @example
 * const notes = [1, 18, 15];
 * console.log(len(notes)); // 3
 * 
 * const user = { name: 'John', age: 30 };
 * console.log(len(user)); // 2
 * 
 * console.log(len(null)); // 0
 * console.log(len('hello')); // 0
 */
function len(params) {
  if (params && isArray(params)) {
    return params.length;
  } else if (isObject(params)) {
    return Object.keys(params).length;
  }
  return 0;
}

module.exports = len;

