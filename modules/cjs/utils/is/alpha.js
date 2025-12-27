/**
 * Vérifie si la valeur est une chaîne contenant uniquement des lettres (y compris les caractères accentués et Unicode)
 * @function alpha
 * @param {*} value - the string to check
 * @returns {boolean} true if value contains only letters, false otherwise
 * @example
 * // Examples with basic characters
 * alpha('abc')        // true
 * alpha('ABC')        // true
 * alpha('aBcD')       // true
 * alpha('')           // false
 * alpha('123')        // false
 * alpha('a1b2')       // false
 * alpha('abc ')       // false (contains a space)
 * alpha('abc!')       // false (contains a special character)
 * alpha(123)          // false
 * alpha(null)         // false
 * 
 * // Examples with accented and Unicode characters
 * alpha('éèêëàâäôöùûüÿç')  // true
 * alpha('Привет')           // true (cyrillique)
 * alpha('こんにちは')       // true (japonais)
 * alpha('مرحبا')           // true (arabe)
 * alpha('안녕하세요')       // true (coréen)
 */
module.exports = function alpha(value) {
    if (typeof value !== 'string' || value.length === 0) {
        return false;
    }
    // uses \p{L} to match any Unicode letter
    // and \p{M}* to handle combining characters (accents, etc.)
    // The 'u' flag is necessary for Unicode support
    return /^[\p{L}\p{M}]+$/u.test(value);
};
