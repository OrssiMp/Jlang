/**
 * Vérifie si une valeur est définie (n'est pas undefined)
 * @param {*} value - La valeur à vérifier
 * @returns {boolean} true si la valeur est définie (même null), false si undefined
 * @example
 * isDefined(undefined)  // false
 * isDefined(null)       // true
 * isDefined(0)          // true
 * isDefined('')         // true
 * isDefined(false)      // true
 */
function isDefined(value) {
    return value !== undefined;
}

module.exports = isDefined;
