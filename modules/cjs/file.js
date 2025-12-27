
/**
 * File operations module - Read and write files
 * Provides functions to handle file operations inspired by PHP's file functions
 * 
 * @module file
 */


const fileExists = require("./utils/file/fileExist");
const fileSize = require("./utils/file/filesize");

module.exports ={
    fileSize,
    fileExists,
    
}

