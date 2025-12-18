/**
 * Vérifie si la chaîne contient au moins une lettre (y compris les caractères Unicode)
 * @param {string} value - La chaîne à vérifier
 * @returns {boolean} true si la chaîne contient au moins une lettre, false sinon
 * @example
 * hasAlpha('123')      // false
 * hasAlpha('abc')      // true
 * hasAlpha('123abc')   // true
 * hasAlpha('éèê')      // true
 * hasAlpha('Привет')   // true
 * hasAlpha('123!@#')   // false
 * hasAlpha('')         // false
 * hasAlpha(123)        // false
 * hasAlpha(null)       // false
 */
module.exports = function hasAlpha(value) {
    if (typeof value !== 'string') {
        return false;
    }
    // Vérifie s'il y a au moins une lettre Unicode dans la chaîne
    return /[\p{L}\p{M}]/u.test(value);
};
    
