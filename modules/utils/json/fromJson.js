/**
 * Convertit une chaîne JSON en valeur JavaScript
 * @param {string} jsonString - La chaîne JSON à parser
 * @param {Function} [reviver] - Fonction de transformation optionnelle
 * @returns {*} La valeur JavaScript correspondante
 * @throws {SyntaxError} Si la chaîne n'est pas un JSON valide
 * @example
 * fromJson('{"name":"John"}')  // {name: "John"}
 * fromJson('[1, 2, 3]')         // [1, 2, 3]
 */
module.exports = function fromJson(jsonString, reviver) {
    if (typeof jsonString !== 'string') {
        throw new TypeError('La valeur fournie doit être une chaîne de caractères');
    }
    return JSON.parse(jsonString, reviver);
};
