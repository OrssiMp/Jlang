/**
 * Check if a variable exists (is declared) without throwing ReferenceError
 * This function can safely check for undeclared variables using typeof
 * 
 * @function variableExists
 * @param {string} variableName - The name of the variable to check (as string)
 * @param {Object} [scope=globalThis] - The scope to check in (defaults to global)
 * @returns {boolean} true if variable exists, false if not declared
 * 
 * @example
 * variableExists('myVar') // false if myVar is not declared
 * variableExists('console') // true (console exists globally)
 * variableExists('myVar', myObject) // checks if myVar exists in myObject
 */
function variableExists(variableName, scope = globalThis) {
    // If scope is provided, check property existence
    if (scope && scope !== globalThis) {
        return variableName in scope;
    }
    
    // For global scope, use typeof to avoid ReferenceError
    try {
        return typeof eval(variableName) !== 'undefined';
    } catch (e) {
        // If eval fails or variable doesn't exist
        return false;
    }
}

module.exports = variableExists;
