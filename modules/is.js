/**
 * is module - Type checking and validation utilities
 * Provides functions to check variable types and values, inspired by PHP's type checking functions
 * 
 * @module is
 * @requires ./utils/is/array
 * @requires ./utils/is/empty
 * @requires ./utils/is/object
 * @requires ./utils/is/isset
 * @requires ./utils/is/defined
 * @requires ./utils/is/alpha
 * @requires ./utils/is/function
 * @requires ./utils/is/functionExists
 * @requires ./utils/is/json
 * @requires ../toPascalCase
 */

const array = require("./utils/is/array");
const empty = require("./utils/is/empty");
const object = require("./utils/is/object");
const isset = require("./utils/is/isset");
const defined = require("./utils/is/defined");
const alpha = require("./utils/is/alpha");
const isFunction = require("./utils/is/function");
const functionExists = require("./utils/is/functionExists");
const isJson = require("./utils/is/json");
const toPascalCase = require("./toPascalCase");

/**
 * Object containing all type checking functions with multiple naming conventions
 * @namespace is
 */

// Export functions with clear names
module.exports = {
    // Array functions
    /**
     * Check if value is an array
     * @function array
     * @param {*} value - Value to check
     * @returns {boolean} True if value is an array
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray}
     */
    array,
    
    /**
     * Alias for array function
     * @function isArray
     * @param {*} value - Value to check
     * @returns {boolean} True if value is an array
     */
    isArray: array,
    
    // Empty functions
    /**
     * Check if value is empty (null, undefined, empty string/array/object)
     * @function empty
     * @param {*} value - Value to check
     * @returns {boolean} True if value is empty
     */
    empty,
    
    /**
     * Alias for empty function
     * @function isEmpty
     * @param {*} value - Value to check
     * @returns {boolean} True if value is empty
     */
    isEmpty: empty,
    
    // Object functions
    /**
     * Check if value is an object (excluding arrays and null)
     * @function object
     * @param {*} value - Value to check
     * @returns {boolean} True if value is an object
     */
    object,
    
    /**
     * Alias for object function
     * @function isObject
     * @param {*} value - Value to check
     * @returns {boolean} True if value is an object
     */
    isObject: object,
    
    // Isset functions
    /**
     * Check if variable/property exists and is not null (PHP isset equivalent)
     * @function isset
     * @param {Object|Array|*} target - Target to check
     * @param {...string|number} path - Optional property path for nested checking
     * @returns {boolean} True if value exists and is not null
     * @example
     * isset(variable) // Check simple variable
     * isset(obj, 'prop', 'nested') // Check nested property
     * isset(arr, 0) // Check array index
     */
    isset,
    
    // Defined functions
    /**
     * Check if value is defined (not undefined)
     * @function defined
     * @param {*} value - Value to check
     * @returns {boolean} True if value is not undefined
     */
    defined,
    
    /**
     * Alias for defined function
     * @function isDefined
     * @param {*} value - Value to check
     * @returns {boolean} True if value is not undefined
     */
    isDefined: defined,
    
    // Alpha functions
    /**
     * Check if string contains only alphabetic characters
     * @function alpha
     * @param {string} str - String to check
     * @returns {boolean} True if string contains only letters
     */
    alpha,
    
    /**
     * Alias for alpha function
     * @function isAlpha
     * @param {string} str - String to check
     * @returns {boolean} True if string contains only letters
     */
    isAlpha: alpha,
    
    // Function functions
    /**
     * Check if value is a function
     * @function function
     * @param {*} value - Value to check
     * @returns {boolean} True if value is a function
     */
    function: isFunction,
    
    /**
     * Alias for function checking
     * @function isFunction
     * @param {*} value - Value to check
     * @returns {boolean} True if value is a function
     */
    isFunction,
    
    /**
     * Check if function exists by name in global scope
     * @function functionExists
     * @param {string} name - Function name to check
     * @returns {boolean} True if function exists
     */
    functionExists,
    
    /**
     * Alias for functionExists
     * @function isFunctionExists
     * @param {string} name - Function name to check
     * @returns {boolean} True if function exists
     */
    isFunctionExists: functionExists,
    
    // JSON functions
    /**
     * Check if value is a valid JSON string
     * @function json
     * @param {string} str - String to check
     * @returns {boolean} True if string is valid JSON
     */
    json: isJson,
    
    /**
     * Alias for json function
     * @function isJson
     * @param {string} str - String to check
     * @returns {boolean} True if string is valid JSON
     */
    isJson
};

// Add prefixed versions (isXxx) for all functions that don't already start with 'is'
Object.entries(module.exports).forEach(([key, value]) => {
    if (!key.startsWith('is')) {
        const prefixedKey = `is${toPascalCase(key)}`;
        if (!module.exports[prefixedKey]) {  // Don't overwrite existing keys
            module.exports[prefixedKey] = value;
        }
    }
});

