/**
 * Vérifie si une valeur est vide
 * @param {*} value - La valeur à vérifier
 * @returns {boolean} true si la valeur est vide, null ou undefined
 */
module.exports = function isEmpty(value) {
    // Vérifie si la valeur est null ou undefined
    if (value == null) {
        return true;
    }

    // Vérifie les tableaux et les chaînes vides
    if (Array.isArray(value) || typeof value === 'string') {
        return value.length === 0;
    }

    // Vérifie les objets vides
    if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    }

    // Pour les autres types (nombres, booléens, etc.)
    return false;
};