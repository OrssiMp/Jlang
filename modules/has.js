/**
 * has module - Property checking utilities
 * Provides functions to check if values contain specific types of characters or properties
 * 
 * @module has
 * @requires ./utils/has/alpha
 */

const alpha = require("./utils/has/alpha");

/**
 * Object containing all property checking functions with multiple naming conventions
 * @namespace has
 */

module.exports = {
    /**
     * Check if string contains any alphabetic characters
     * @function alpha
     * @param {string} str - String to check
     * @returns {boolean} True if string contains at least one letter
     * @example
     * has.alpha('abc123') // true
     * has.alpha('123') // false
     */
    alpha,
    
    /**
     * Alias for alpha function
     * @function hasAlpha
     * @param {string} str - String to check
     * @returns {boolean} True if string contains at least one letter
     * @example
     * hasAlpha('abc123') // true
     * hasAlpha('123') // false
     */
    hasAlpha: alpha,
};

// Add prefixed versions (hasXxx) for all functions
Object.entries(module.exports).forEach(([key,value]) => {
    if(!key.startsWith("has"))
        module.exports[`has${key.charAt(0).toUpperCase() + key.slice(1)}`] = value;
});