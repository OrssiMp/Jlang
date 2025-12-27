var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var is$1 = {exports: {}};

/**
 * Check if a value is an array
 * 
 * @function isArray
 * @param {*} value - The value to test
 * @param {boolean} [allowEmpty=true] - If false, also checks that the array is not empty
 * @returns {boolean} true if the value is an array (and not empty if allowEmpty is false)
 * 
 * @example
 * // Basic array checking
 * isArray([1, 2, 3])           // true
 * isArray([])                  // true
 * isArray(new Array())         // true
 * 
 * @example
 * // With allowEmpty set to false
 * isArray([1, 2, 3], false)   // true
 * isArray([], false)           // false
 * 
 * @example
 * // Non-array values
 * isArray('string')            // false
 * isArray({})                  // false
 * isArray(null)                // false
 * isArray(undefined)           // false
 * isArray(123)                 // false
 * isArray(() => {})            // false
 */

var array$1 = function isArray(value, allowEmpty = true) {
    if (!Array.isArray(value)) {
        return false;
    }
    return allowEmpty ? true : value.length > 0;
};

/**
 * Check if a value is empty (null, undefined, empty string/array/object)
 * 
 * @function isEmpty
 * @param {*} value - The value to check
 * @returns {boolean} true if the value is empty, null or undefined
 * 
 * @example
 * isEmpty(null) //
 * isEmpty(undefined) // true
 * isEmpty('') // true
 * isEmpty([]) // true
 * isEmpty({}) // true
 * isEmpty(0) // false
 * isEmpty(false) // false
 * isEmpty('hello') // false
 * you can use that whith "is" is.isEmpty()
 */

var empty = function isEmpty(value) {
    // Check if value is null or undefined
    if (value == null) {
        return true;
    }

    // Check empty arrays and strings
    if (Array.isArray(value) || typeof value === 'string') {
        return value.length === 0;
    }

    // Check empty objects
    if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    }

    // For other types (numbers, booleans, etc.)
    return false;
};

const array = array$1;
/**
 * Check if a value is an object (excluding arrays and null)
 * 
 * @function isObject
 * @param {*} value - The value to check
 * @returns {boolean} true if the value is an object, false otherwise
 * 
 * @example
 * // Valid objects
 * isObject({})                    // true
 * isObject({ name: 'John' })      // true
 * isObject(new Date())            // true
 * isObject(/regex/)               // true
 * 
 * @example
 * // Not objects
 * isObject([])                    // false (array)
 * isObject(null)                  // false
 * isObject(undefined)             // false
 * isObject('string')               // false
 * isObject(123)                    // false
 * isObject(true)                  // false
 * isObject(() => {})              // false (function)
 */
var object = function isObject(value) {
    return value !== null && typeof value === 'object' && !array(value);
};

/**
 * Check if a variable/property is defined and not null
 * Similar to PHP's isset() function
 * 
 * @function isset
 * @param {Object|Array|*} target - The object or array to check
 * @param {...string|number} path - Optional property path for nested checking
 * @returns {boolean} true if the value is defined and not null
 * 
 * @example
 * // Simple usage
 * isset(variable)
 * 
 * // Object property checking
 * isset(obj, 'prop1', 'prop2')
 * 
 * // Array index checking
 * isset(arr, 0)
 * 
 * @example
 * const user = { profile: { name: 'John' } };
 * isset(user, 'profile', 'name') // true
 * isset(user, 'profile', 'age') // false
 * isset(user, 'profile', 'address', 'street') // false
 */

function isset$1(target, ...path) {
    // If no path provided, simply check the value
    if (path.length === 0) {
        return target !== undefined && target !== null;
    }
    
    // If first argument is null/undefined, return false
    if (target == null) {
        return false;
    }
    
    // Traverse the path to check each level
    let current = target;
    for (const key of path) {
        if (current == null || typeof current !== 'object') {
            return false;
        }
        
        // Check if key exists in object/array
        if (!(key in Object(current))) {
            return false;
        }
        
        current = current[key];
        
        // If we reach null/undefined before end of path
        if (current === null || current === undefined) {
            return false;
        }
    }
    
    return true;
}

var isset_1 = isset$1;

/**
 * Check if a value is defined (not undefined)
 * 
 * @function isDefined
 * @param {*} value - The value to check
 * @returns {boolean} true if the value is defined (even null), false if undefined
 * 
 * @example
 * isDefined(undefined)  // false
 * isDefined(null)       // true
 * isDefined(0)          // true
 * isDefined('')         // true
 * isDefined(false)      // true
 * isDefined({})         // true
 */

function isDefined(value) {
    return value !== undefined;
}

var defined = isDefined;

/**
 * Vérifie si la valeur est une chaîne contenant uniquement des lettres (y compris les caractères accentués et Unicode)
 * @function alpha
 * @param {*} value - the string to check
 * @returns {boolean} true if value contains only letters, false otherwise
 * @example
 * // Examples with basic characters
 * alpha('abc')        // true
 * alpha('ABC')        // true
 * alpha('aBcD')       // true
 * alpha('')           // false
 * alpha('123')        // false
 * alpha('a1b2')       // false
 * alpha('abc ')       // false (contains a space)
 * alpha('abc!')       // false (contains a special character)
 * alpha(123)          // false
 * alpha(null)         // false
 * 
 * // Examples with accented and Unicode characters
 * alpha('éèêëàâäôöùûüÿç')  // true
 * alpha('Привет')           // true (cyrillique)
 * alpha('こんにちは')       // true (japonais)
 * alpha('مرحبا')           // true (arabe)
 * alpha('안녕하세요')       // true (coréen)
 */

var alpha$1 = function alpha(value) {
    if (typeof value !== 'string' || value.length === 0) {
        return false;
    }
    // uses \p{L} to match any Unicode letter
    // and \p{M}* to handle combining characters (accents, etc.)
    // The 'u' flag is necessary for Unicode support
    return /^[\p{L}\p{M}]+$/u.test(value);
};

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

var _function = function isFunction(value) {
    // If it's already a function
    if (typeof value === 'function') {
        return true;
    }
    
    // If it's a string, check if a function with this name exists in global scope
    if (typeof value === 'string') {
        try {
            // Check in global scope (window in browser, global in Node.js)
            const globalScope = typeof window !== 'undefined' ? window : commonjsGlobal;
            const func = globalScope[value];
            return typeof func === 'function';
        } catch (e) {
            return false;
        }
    }
    
    return false;
};

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

var functionExists = function functionExists(functionName) {
    if (typeof functionName !== 'string') {
        return false;
    }
    
    try {
        const globalScope = typeof window !== 'undefined' ? window : commonjsGlobal;
        const func = globalScope[functionName];
        return typeof func === 'function';
    } catch (e) {
        return false;
    }
};

/**
 * Check if a string is valid JSON
 * 
 * @function isJson
 * @param {string} str - The string to check
 * @returns {boolean} true if the string is valid JSON, false otherwise
 * 
 * @example
 * // Valid JSON strings
 * isJson('{"name":"John"}')    // true
 * isJson('[1, 2, 3]')          // true
 * isJson('true')               // true
 * isJson('null')               // true
 * isJson('42')                 // true
 * 
 * @example
 * // Invalid JSON strings
 * isJson('not json')           // false
 * isJson('')                   // false
 * isJson('{name: "John"}')     // false (missing quotes)
 * isJson('{"name": "John"')    // false (unclosed)
 * 
 * @example
 * // Non-string inputs
 * isJson(null)                 // false
 * isJson(123)                  // false
 * isJson({})                   // false
 */

var json$2 = function isJson(str) {
    if (typeof str !== 'string') {
        return false;
    }
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * Convert a string to PascalCase (first letter capitalized, rest unchanged)
 * 
 * @function toPascalCase
 * @param {string} str - The string to convert
 * @returns {string} The PascalCase version of the string
 * 
 * @example
 * toPascalCase('hello') // 'Hello'
 * toPascalCase('world') // 'World'
 * toPascalCase('test') // 'Test'
 */

function toPascalCase$1(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var toPascalCase_1 = toPascalCase$1;

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

(function (module) {
	const array = array$1;
	const empty$1 = empty;
	const object$1 = object;
	const isset = isset_1;
	const defined$1 = defined;
	const alpha = alpha$1;
	const isFunction = _function;
	const functionExists$1 = functionExists;
	const isJson = json$2;
	const toPascalCase = toPascalCase_1;

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
	    empty: empty$1,
	    
	    /**
	     * Alias for empty function
	     * @function isEmpty
	     * @param {*} value - Value to check
	     * @returns {boolean} True if value is empty
	     */
	    isEmpty: empty$1,
	    
	    // Object functions
	    /**
	     * Check if value is an object (excluding arrays and null)
	     * @function object
	     * @param {*} value - Value to check
	     * @returns {boolean} True if value is an object
	     */
	    object: object$1,
	    
	    /**
	     * Alias for object function
	     * @function isObject
	     * @param {*} value - Value to check
	     * @returns {boolean} True if value is an object
	     */
	    isObject: object$1,
	    
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
	    defined: defined$1,
	    
	    /**
	     * Alias for defined function
	     * @function isDefined
	     * @param {*} value - Value to check
	     * @returns {boolean} True if value is not undefined
	     */
	    isDefined: defined$1,
	    
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
	    functionExists: functionExists$1,

	    
	    /**
	     * Alias for functionExists
	     * @function isFunctionExists
	     * @param {string} name - Function name to check
	     * @returns {boolean} True if function exists
	     */
	    isFunctionExists: functionExists$1,
	    
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
} (is$1));

var isExports = is$1.exports;

var has$1 = {exports: {}};

/**
 * Check if a string contains one or more alphabetic characters
 * 
 * @function alpha
 * @param {string} value - The string to check
 * @returns {boolean} true if the string contains one or more letters, false otherwise
 * 
 * @example
 * alpha('abc123') // true
 * alpha('123') // false
 * alpha('hello world') // true
 * alpha('!@#$') // false
 */

var alpha = function alpha(value) {
    return /[\p{L}\p{M}]/u.test(value);
};

/**
 * has module - Property checking utilities
 * Provides functions to check if values contain specific types of characters or properties
 * 
 * @module has
 * @requires ./utils/has/alpha
 */

(function (module) {
	const alpha$1 = alpha;

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
	    alpha: alpha$1,
	    
	    /**
	     * Alias for alpha function
	     * @function hasAlpha
	     * @param {string} str - String to check
	     * @returns {boolean} True if string contains at least one letter
	     * @example
	     * hasAlpha('abc123') // true
	     * hasAlpha('123') // false
	     */
	    hasAlpha: alpha$1,
	};

	// Add prefixed versions (hasXxx) for all functions
	Object.entries(module.exports).forEach(([key,value]) => {
	    if(!key.startsWith("has"))
	        module.exports[`has${key.charAt(0).toUpperCase() + key.slice(1)}`] = value;
	}); 
} (has$1));

var hasExports = has$1.exports;

var json$1 = {exports: {}};

/**
 * Convert a JavaScript value to JSON string
 * 
 * @function toJson
 * @param {*} value - The value to serialize
 * @param {Function|Array} [replacer] - Transformation function or array of properties to include
 * @param {number|string} [space] - Number of spaces or string for indentation
 * @returns {string} The formatted JSON string
 * 
 * @example
 * toJson({ name: "John" }) // '{"name":"John"}'
 * toJson({ name: "John" }, null, 2) // With indentation
 * toJson([1, 2, 3]) // '[1,2,3]'
 */

var toJson$1 = function toJson(value, replacer, space) {
    return JSON.stringify(value, replacer, space);
};

/**
 * Convert a JSON string to JavaScript value
 * 
 * @function fromJson
 * @param {string} jsonString - The JSON string to parse
 * @param {Function} [reviver] - Optional transformation function
 * @returns {*} The corresponding JavaScript value
 * @throws {SyntaxError} If the string is not valid JSON
 * @throws {TypeError} If the provided value is not a string
 * 
 * @example
 * fromJson('{"name":"John"}')  // {name: "John"}
 * fromJson('[1, 2, 3]')         // [1, 2, 3]
 * fromJson('true')              // true
 */

var fromJson$1 = function fromJson(jsonString, reviver) {
    if (typeof jsonString !== 'string') {
        throw new TypeError('The provided value must be a string');
    }
    return JSON.parse(jsonString, reviver);
};

/**
 * json module - JSON parsing and stringification utilities
 * Provides functions to safely convert between JavaScript objects and JSON strings
 * 
 * @module json
 * @requires ./utils/json/toJson
 * @requires ./utils/json/fromJson
 */

const toJson = toJson$1;
const fromJson = fromJson$1;

/**
 * Object containing all JSON utility functions with aliases for compatibility
 * @namespace Json
 */

json$1.exports = {
    /**
     * Convert JavaScript value to JSON string
     * @function toJson
     * @param {*} value - Value to convert to JSON
     * @param {number|string} [space] - Optional spacing for pretty printing
     * @returns {string} JSON string representation of the value
     * @throws {Error} If value contains circular references or non-serializable data
     * @example
     * json.toJson({ name: 'John', age: 30 }) // '{"name":"John","age":30}'
     * json.toJson({ a: 1 }, 2) // '{\n  "a": 1\n}'
     */
    toJson,
    
    /**
     * Parse JSON string to JavaScript object
     * @function fromJson
     * @param {string} str - JSON string to parse
     * @returns {*} Parsed JavaScript value
     * @throws {SyntaxError} If string is not valid JSON
     * @example
     * json.fromJson('{"name":"John"}') // { name: 'John' }
     * json.fromJson('[1,2,3]') // [1, 2, 3]
     */
    fromJson
};

// Add aliases for backward compatibility with native JSON methods
json$1.exports.stringify = toJson;
json$1.exports.parse = fromJson;

var jsonExports = json$1.exports;

const { isArray: isArray$1, isObject: isObject$1, isset } = isExports;

/**
 * Calculate the sum of numeric values in an array or object
 * 
 * @function sum
 * @param {Array|Object} params - The array or object containing numeric values
 * @returns {number} The sum of all numeric values
 * @throws {Error} If input is not an array or object
 * 
 * @example
 * // Array examples
 * const notes = [1, 2, 3];
 * console.log(sum(notes)); // 6
 * 
 * const mixed = [1, "2", "3", "invalid", 4.5];
 * console.log(sum(mixed)); // 10.5
 * 
 * @example
 * // Object examples
 * console.log(sum({ a: 2, c: "1", d: "e" })); // 3
 * 
 * const data = { x: 10, y: "20", z: "invalid", w: 5.5 };
 * console.log(sum(data)); // 35.5
 * 
 * @example
 * // Edge cases
 * console.log(sum([])); // 0
 * console.log(sum({})); // 0
 * console.log(sum({ a: null, b: undefined, c: "" })); // 0
 * 
 * @example
 * // Error cases
 * try {
 *   sum("not an array or object"); // throws Error
 * } catch (e) {
 *   console.log(e.message); // "input must be an array or an object"
 * }
 */
function sum$1(params) {
  let values;
  if (isArray$1(params)) {
    values = params;
  } else if (isObject$1(params) && isset(params)) {
    values = Object.values(params);
  } else {
    throw new Error("input must be an array or an object");
  }
  return values.reduce((acc, val) => {
    const num = Number(val);
    return acc + (isNaN(num) ? 0 : num);
  }, 0);
}

var sum_1 = sum$1;

const { isArray, isObject } = isExports;

/**
 * Returns the length of an array or the number of properties of an object
 * 
 * @function len
 * @param {Array|Object} params - The array or object to measure
 * @returns {number} The total count of elements or properties
 * 
 * @example
 * const notes = [1, 18, 15];
 * console.log(len(notes)); // 3
 * 
 * const user = { name: 'John', age: 30 };
 * console.log(len(user)); // 2
 * 
 * console.log(len(null)); // 0
 * console.log(len('hello')); // 0
 */
function len$1(params) {
  if (params && isArray(params)) {
    return params.length;
  } else if (isObject(params)) {
    return Object.keys(params).length;
  }
  return 0;
}

var len_1 = len$1;

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

function listFunctions$1(module) {
    if (!module || typeof module !== 'object') {
        return [];
    }
    
    return Object.entries(module)
        .filter(([_, value]) => typeof value === 'function')
        .map(([name]) => name);
}

var listFunctions_1 = listFunctions$1;

/**
 * jlang - JavaScript Utility Library
 * A modern JavaScript utility library inspired by PHP and Python
 * providing essential helper functions missing from native JavaScript.
 * 
 * @author OrssiMp
 * @version 1.0.0
 * @license ISC
 */

// Import all modules
const is = isExports;
const has = hasExports;
const json = jsonExports;
const  sum = sum_1;
const  toPascalCase = toPascalCase_1;
const  len = len_1;
const listFunctions = listFunctions_1;

/**
 * Main jlang library object containing all utility functions
 * @namespace jlang
 */

// Export all methods directly
var jlang = {
  // is module methods
  ...is,
  
  // has module methods
  ...has,
  
  // json module methods
  ...json,
  
  // Export complete namespaces as well
  is,
  has,
  json,
  sum,
  len,
  toPascalCase,
  listFunctions,

};

var index = /*@__PURE__*/getDefaultExportFromCjs(jlang);

export { index as default };
