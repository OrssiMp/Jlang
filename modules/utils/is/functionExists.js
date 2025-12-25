/**
 * Vérifie si une fonction avec le nom spécifié existe dans la portée globale
 * @param {string} functionName - Le nom de la fonction à vérifier
 * @returns {boolean} true si une fonction avec ce nom existe, false sinon
 * @example
 * // Dans le scope global
 * function maFonction() {}
 * 
 * // Tests
 * functionExists('maFonction')  // true
 * functionExists('fonctionInexistante')  // false
 * functionExists('String')  // false (constructeur, pas une fonction utilisateur)
 * functionExists('setTimeout')  // true (fonction native)
 */
module.exports = function functionExists(functionName) {
    if (typeof functionName !== 'string') {
        return false;
    }
    
    try {
        const globalScope = typeof window !== 'undefined' ? window : global;
        const func = globalScope[functionName];
        return typeof func === 'function';
    } catch (e) {
        return false;
    }
};
