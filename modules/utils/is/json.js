/**
 * Vérifie si une chaîne est un JSON valide
 * @param {string} str - La chaîne à vérifier
 * @returns {boolean} true si la chaîne est un JSON valide, false sinon
 * @example
 * isJson('{"name":"John"}')  // true
 * isJson('{"name":"John"}')  // true
 * isJson('not json')          // false
 * isJson('')                  // false
 * isJson(null)                // false
 */
module.exports = function isJson(str) {
    if (typeof str !== 'string') {
        return false;
    }
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};
