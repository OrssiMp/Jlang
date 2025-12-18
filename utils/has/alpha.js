/**
 * vérifie si une chaine contient une ou plusieurs lettres
 * @params {string} value - la chaine à vérifier
 * @returns {boolean} true si la chaine contient une ou plusieurs lettres, false sinon
 */

module.exports = function alpha(value) {
    return /[\p{L}\p{M}]/.test(value);
}
    
