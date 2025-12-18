/**
 * Vérifie si la valeur est une chaîne contenant uniquement des lettres (y compris les caractères accentués et Unicode)
 * @param {*} value - La valeur à tester
 * @returns {boolean} true si la valeur est une chaîne non vide contenant uniquement des lettres, false sinon
 * @example
 * // Exemples avec caractères de base
 * alpha('abc')        // true
 * alpha('ABC')        // true
 * alpha('aBcD')       // true
 * alpha('')           // false
 * alpha('123')        // false
 * alpha('a1b2')       // false
 * alpha('abc ')       // false (contient un espace)
 * alpha('abc!')       // false (contient un caractère spécial)
 * alpha(123)          // false
 * alpha(null)         // false
 * 
 * // Exemples avec caractères accentués et Unicode
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
    // Utilisation de \p{L} pour correspondre à n'importe quelle lettre Unicode
    // et \p{M}* pour gérer les caractères combinants (accents, etc.)
    // Le flag 'u' est nécessaire pour le support Unicode
    return /^[\p{L}\p{M}]+$/u.test(value);
};
