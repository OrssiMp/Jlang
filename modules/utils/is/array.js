/**
 * Vérifie si une valeur est un tableau
 * @param {*} value - La valeur à tester
 * @param {boolean} [allowEmpty=true] - Si false, vérifie également que le tableau n'est pas vide
 * @returns {boolean} true si la valeur est un tableau (et non vide si allowEmpty est à false)
 * @example
 * // Retourne true
 * isArray([1, 2, 3])
 * isArray([])
 * 
 * // Avec allowEmpty à false
 * isArray([1, 2, 3], false) // true
 * isArray([], false)         // false
 */
module.exports = function isArray(value, allowEmpty = true) {
    if (!Array.isArray(value)) {
        return false;
    }
    return allowEmpty ? true : value.length > 0;
    
};
