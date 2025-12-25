// Importer tous les modules
const is = require("./modules/is");
const has = require("./modules/has");
const json = require("./modules/json");

// Exporter toutes les méthodes directement
module.exports = {
  // Méthodes is
  ...is,
  
  // Méthodes has
  ...has,
  
  // Méthodes json
  ...json,
  
  // Exporter aussi les espaces de noms complets
  is,
  has,
  json
};
