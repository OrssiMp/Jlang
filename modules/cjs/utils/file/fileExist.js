const fs = require("fs");
const path = require("path");



/**
 * Check if file exists (PHP file_exists equivalent)
 * @function fileExists
 * @param {string} filename - Path to check
 * @returns {boolean} True if file exists
 * @example
 * fileExists('./config.json') // true
 */
function fileExists(filename) {
    return fs.existsSync(filename);
}


module.exports = fileExists