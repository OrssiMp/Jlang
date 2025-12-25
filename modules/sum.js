const { isArray, isObject, isset } = require("./is");
/**
 * 
 * @param {Object}  Objet
 * @param {Array}   Array
 * @returns {number} Renvoie la somme d'un tableau ou un objet
 * @example
 * const notes = [1, 2, 3];
console.log(sum({ a: 2, c: "1" ,d:"e"}));//3
console.log(sum(notes));//6

 */
function sum(params) {
  let values;
  if (isArray(params)) {
    values = params;
  } else if (isObject(params) && params !== isset(params)) {
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
