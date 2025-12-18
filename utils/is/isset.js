/**
 * Vérifie si une variable/propriété est définie et non null
 * Similaire à la fonction isset() de PHP
 * @param {Object|Array} target - L'objet ou le tableau à vérifier
 * @param {...string|number} path - Chemin de la propriété (optionnel)
 * @returns {boolean} true si la valeur est définie et non null
 * @example
 * // Utilisation simple
 * isset(variable)
 * 
 * // Vérification de propriété d'objet
 * isset(obj, 'prop1', 'prop2')
 * 
 * // Vérification d'index de tableau
 * isset(arr, 0)
 */
function isset(target, ...path) {
    // Si pas de chemin, vérifie simplement la valeur
    if (path.length === 0) {
        return target !== undefined && target !== null;
    }
    
    // Si le premier argument est null/undefined, retourne false
    if (target == null) {
        return false;
    }
    
    // Parcourt le chemin pour vérifier chaque niveau
    let current = target;
    for (const key of path) {
        if (current == null || typeof current !== 'object') {
            return false;
        }
        
        // Vérifie si la clé existe dans l'objet/tableau
        if (!(key in Object(current))) {
            return false;
        }
        
        current = current[key];
        
        // Si on atteint une valeur null/undefined avant la fin du chemin
        if (current === null || current === undefined) {
            return false;
        }
    }
    
    return true;
}

module.exports = isset;