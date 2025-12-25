const toJson = require('./toJson');
const fromJson = require('./fromJson');

module.exports = {
    toJson,
    fromJson
};

// Ajout d'alias pour la rétrocompatibilité
module.exports.stringify = toJson;
module.exports.parse = fromJson;
