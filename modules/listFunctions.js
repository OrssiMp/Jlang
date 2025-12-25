/**
 * Liste toutes les fonctions disponibles dans un module
 * @param {Object} module - Le module à analyser
 * @returns {string[]} Tableau des noms de fonctions
 * @example
 * const myModule = {
 *   func1: () => {},
 *   func2: function() {},
 *   prop: 'value'
 * };
 * listFunctions(myModule); // Retourne: ['func1', 'func2']
 */
function listFunctions(module) {
    if (!module || typeof module !== 'object') {
        return [];
    }
    
    return Object.entries(module)
        .filter(([_, value]) => typeof value === 'function')
        .map(([name]) => name);
}

module.exports = listFunctions;
