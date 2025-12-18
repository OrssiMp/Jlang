/**
 * Vérifie si la valeur est une chaîne contenant au moins une lettre (a-z, A-Z)
 * @param {*} value - La valeur à tester
 * @returns {boolean} true si la valeur est une chaîne contenant au moins une lettre, false sinon
 * @example
 * alpha('abc')    // true
 * alpha('123')    // false
 * alpha('a1b2')   // true
 * alpha('')       // false
 * alpha(123)      // false
 * alpha(null)     // false
 */
module.exports = function alpha(value) {
    if (typeof value !== 'string') {
        return false;
    }
    return /[a-zA-Z]/.test(value);
};
