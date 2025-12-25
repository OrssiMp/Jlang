const array = require("./utils/is/array");
const empty = require("./utils/is/empty");
const object = require("./utils/is/object");
const isset = require("./utils/is/isset");
const defined = require("./utils/is/defined");
const alpha = require("./utils/is/alpha");
const isFunction = require("./utils/is/function");
const functionExists = require("./utils/is/functionExists");
const isJson = require("./utils/is/json");

// Fonction utilitaire pour créer les noms en PascalCase
const toPascalCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Exporter les fonctions avec des noms clairs
module.exports = {
    // Fonctions array
    array,
    isArray: array,
    
    // Fonctions empty
    empty,
    isEmpty: empty,
    
    // Fonctions object
    object,
    isObject: object,
    
    // Fonctions isset
    isset,
    
    // Fonctions defined
    defined,
    isDefined: defined,
    
    // Fonctions alpha
    alpha,
    isAlpha: alpha,
    
    // Fonctions function
    function: isFunction,
    isFunction,
    functionExists,
    isFunctionExists: functionExists,
    
    // JSON functions
    json: isJson,
    isJson
};

// Ajouter les versions avec préfixe 'is' uniquement si elles n'existent pas déjà
Object.entries(module.exports).forEach(([key, value]) => {
    if (!key.startsWith('is')) {
        const prefixedKey = `is${toPascalCase(key)}`;
        if (!module.exports[prefixedKey]) {  // Ne pas écraser les clés existantes
            module.exports[prefixedKey] = value;
        }
    }
});

