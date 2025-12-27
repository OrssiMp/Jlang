/**
 * @function writeFile
 * @params {string} string- name of file to read
 * @returns content
 */

function writeFile(filename) {
    const filemain = require("fs")
    filemain.writeFileSync(filename)
    
}

module.exports = writeFile