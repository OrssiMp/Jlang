/**
 * Convertit une valeur JavaScript en chaîne JSON
 * @param {*} value - La valeur à sérialiser
 * @param {Function|Array} [replacer] - Fonction de transformation ou tableau de propriétés à inclure
 * @param {number|string} [space] - Nombre d'espaces ou chaîne pour l'indentation
 * @returns {string} La chaîne JSON formatée
 * @example
 * toJson({ name: "John" }) // '{"name":"John"}'
 * toJson({ name: "John" }, null, 2) // Avec indentation
 */
module.exports = function toJson(value, replacer, space) {
    return JSON.stringify(value, replacer, space);
};
