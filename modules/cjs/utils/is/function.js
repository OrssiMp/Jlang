/**
 * Check if the value is a function or if a function with the same name exists in the global scope
 * 
 * @function isFunction
 * @param {string|Function} value - The function name (string) or the function to test
 * @returns {boolean} true if the value is a function or if a function with the same name exists, false otherwise
 * 
 * @example
 * // Direct function testing
 * isFunction(function() {})  // true
 * isFunction(() => {})       // true
 * 
 * @example
 * // Function name testing
 * isFunction('alert')        // true (if window.alert exists)
 * isFunction('maFonction')   // true if a function maFonction() exists in global scope
 * isFunction('setTimeout')   // true (native function)
 * 
 * @example
 * // Invalid cases
 * isFunction(123)           // false
 * isFunction('inexistante')  // false
 * isFunction(null)          // false
 * isFunction({})            // false
 * 
 * // Similar to PHP's function_exists()
 */
module.exports = function isFunction(value) {
    // If it's already a function
    if (typeof value === 'function') {
        return true;
    }
    
    // If it's a string, check if a function with this name exists in global scope
    if (typeof value === 'string') {
        try {
            // Check in global scope (window in browser, global in Node.js)
            const globalScope = typeof window !== 'undefined' ? window : global;
            const func = globalScope[value];
            return typeof func === 'function';
        } catch (e) {
            return false;
        }
    }
    
    return false;
};
