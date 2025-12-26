/**
 * List all available functions in a module
 * 
 * @function listFunctions
 * @param {Object} module - The module to analyze
 * @returns {string[]} Array of function names
 * 
 * @example
 * const myModule = {
 *   func1: () => {},
 *   func2: function() {},
 *   prop: 'value'
 * };
 * listFunctions(myModule); // Returns: ['func1', 'func2']
 * 
 * @example
 * const utils = {
 *   add: (a, b) => a + b,
 *   subtract: (a, b) => a - b,
 *   constant: 42
 * };
 * listFunctions(utils); // Returns: ['add', 'subtract']
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
