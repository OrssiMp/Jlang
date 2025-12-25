const array = require("../utils/is/array");
const empty = require("../utils/is/empty");

// Exporter directement les fonctions
module.exports = {
    array,
    isArray: array, // Alias pour compatibilité
    empty,
    isEmpty: empty
};

// Exporter aussi au niveau supérieur
Object.entries(module.exports).forEach(([key, value]) => {
    module.exports[`is${key.charAt(0).toUpperCase() + key.slice(1)}`] = value;
});

// object.entries transforme l'objet en paramètre en tableau de paires clé-valeur 
// [
//     [ key:'array', value: array ],
//     [ key:'isArray', value: array ]
// ]
// puis forEach parcourt chaque paire clé-valeur
// pour chaque paire clé-valeur, on ajoute un élément à l'objet module.exports ex: module.exports[`isArray`] = array;
// module.exports[`is${key.charAt(0).toUpperCase() + key.slice(1)}`] = value;
// 
// slice (1) enlève le premier caractère de la chaîne de caractères donc on a =  is + (a-array) + Array
// 
// 
// à la fin on a module.exports[`isArray`] = array;
// module.exports['isArray'] = array export la clé isArray et la valeur array;