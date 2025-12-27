
const fs = require("fs");
const path = require("path");

/**
 * Get file size in bytes
 * @function fileSize
 * @param {string} filename - Path to file
 * @returns {number} File size in bytes
 * @throws {Error} If file doesn't exist
 * @example
 * fileSize('./image.png') // 1024
 */
function fileSize(filename) {
    try {
        const stats = fs.statSync(filename);
        return stats.size;
    } catch (error) {
        throw new Error(`Cannot get file size ${filename}: ${error.message}`);
    }
}

module.exports = fileSize