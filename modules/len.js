const { isArray, isEmpty, isObject } = require("./is");
/**
 * Retourne la longueur d'un tableau ou le nombre de propriétés d'un objet
 * @param {any} params 
 * @returns {Number} Renvoie le nombre total
 * @example
 * const notes = [1,18,15]
 * console.log(len(notes))// 3
 */
function len(params) {
  if (params && isArray(params)) {
    return params.length;
  }else if(isObject(params)){
    return Object.keys(params).length
  }
  return 0
}

module.exports = len

