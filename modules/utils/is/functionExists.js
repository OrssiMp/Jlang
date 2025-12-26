/**
 * Check if a function with the specified name exists in the global scope
 * 
 * @function functionExists
 * @param {string} functionName - The name of the function to check
 * @returns {boolean} true if a function with this name exists, false otherwise
 * 
 * @example
 * // Define a function in global scope
 * function maFonction() {}
 * 
 * // Tests
 * functionExists('maFonction')           // true
 * functionExists('fonctionInexistante')   // false
 * functionExists('String')               // false (constructor, not a user function)
 * functionExists('setTimeout')           // true (native function)
 * functionExists('console.log')          // true
 * functionExists('Array')                // false (constructor)
 * 
 * @example
 * // Invalid inputs
 * functionExists(123)                    // false
 * functionExists(null)                   // false
 * functionExists({})                     // false
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
