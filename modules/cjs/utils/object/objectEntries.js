/**
 * Get object entries (PHP array_entries equivalent)
 * @function objectEntries
 * @param {Object} obj - Object to get entries from
 * @returns {Array} Array of [key, value] pairs
 * @example
 * objectEntries({a: 1, b: 2}) // [['a', 1], ['b', 2]]
 */
function objectEntries(obj) {
    return Object.entries(obj);
}

module.exports = objectEntries;