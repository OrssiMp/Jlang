const toJson = require('./utils/json/toJson');
const fromJson = require('./utils/json/fromJson');

module.exports = {
    toJson,
    fromJson
};

// Ajout d'alias pour la rétrocompatibilité
module.exports.stringify = toJson;
module.exports.parse = fromJson;
