/**
 * Vérifie si la valeur est une fonction ou si une fonction du même nom existe dans la portée globale
 * @param {string|Function} value - Le nom de la fonction (string) ou la fonction à tester
 * @returns {boolean} true si la valeur est une fonction ou si une fonction du même nom existe, false sinon
 * @example
 * // En JavaScript
 * isFunction(function() {})  // true
 * isFunction('alert')        // true (si window.alert existe)
 * isFunction('maFonction')   // true si une fonction maFonction() existe dans la portée globale
 * isFunction(123)           // false
 * isFunction('inexistante')  // false
 * isFunction(null)          // false
 * 
 * // Similaire à PHP :
 * // function_exists('ma_fonction')
 */
module.exports = function isFunction(value) {
    // Si c'est déjà une fonction
    if (typeof value === 'function') {
        return true;
    }
    
    // Si c'est une chaîne, vérifier si une fonction de ce nom existe dans la portée globale
    if (typeof value === 'string') {
        try {
            // Vérifier dans le scope global (window dans le navigateur, global dans Node.js)
            const globalScope = typeof window !== 'undefined' ? window : global;
            const func = globalScope[value];
            return typeof func === 'function';
        } catch (e) {
            return false;
        }
    }
    
    return false;
};
