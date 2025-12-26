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
function isset(target, ...path) {
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

module.exports = isset;