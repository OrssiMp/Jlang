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
function toPascalCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = toPascalCase;