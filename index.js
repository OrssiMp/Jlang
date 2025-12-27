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
const is = require("./modules/is");
const has = require("./modules/has");
const json = require("./modules/json");
const sum = require("./modules/sum");
const len = require("./modules/len");
const listFunctions = require("./modules/listFunctions");
const toPascalCase = require("./modules/toPascalCase");


/**
 * Main jlang library object containing all utility functions
 * @namespace jlang
 */

// Export all methods directly
module.exports = {
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
  listFunctions,
  toPascalCase

};
