const { isArray, isObject, isset } = require("./is");

/**
 * Calculate the sum of numeric values in an array or object
 * 
 * @function sum
 * @param {Array|Object} params - The array or object containing numeric values
 * @returns {number} The sum of all numeric values
 * @throws {Error} If input is not an array or object
 * 
 * @example
 * // Array examples
 * const notes = [1, 2, 3];
 * console.log(sum(notes)); // 6
 * 
 * const mixed = [1, "2", "3", "invalid", 4.5];
 * console.log(sum(mixed)); // 10.5
 * 
 * @example
 * // Object examples
 * console.log(sum({ a: 2, c: "1", d: "e" })); // 3
 * 
 * const data = { x: 10, y: "20", z: "invalid", w: 5.5 };
 * console.log(sum(data)); // 35.5
 * 
 * @example
 * // Edge cases
 * console.log(sum([])); // 0
 * console.log(sum({})); // 0
 * console.log(sum({ a: null, b: undefined, c: "" })); // 0
 * 
 * @example
 * // Error cases
 * try {
 *   sum("not an array or object"); // throws Error
 * } catch (e) {
 *   console.log(e.message); // "input must be an array or an object"
 * }
 */
function sum(params) {
  let values;
  if (isArray(params)) {
    values = params;
  } else if (isObject(params) && isset(params)) {
    values = Object.values(params);
  } else {
    throw new Error("input must be an array or an object");
  }
  return values.reduce((acc, val) => {
    const num = Number(val);
    return acc + (isNaN(num) ? 0 : num);
  }, 0);
}

module.exports = sum;
