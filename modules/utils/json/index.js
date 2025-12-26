const toJson = require('./toJson');
const fromJson = require('./fromJson');

/**
 * JSON utility module providing parsing and stringification functions
 * 
 * @module json
 * @namespace Json
 */
module.exports = {
    toJson,
    fromJson
};

// Add aliases for backward compatibility with native JSON methods
module.exports.stringify = toJson;
module.exports.parse = fromJson;
