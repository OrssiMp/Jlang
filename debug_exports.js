// Ancienne méthode (problème de doublons)
console.log("=== ANCIENNE MÉTHODE (AVEC DOUBLONS) ===");

const oldExports = {
    array: () => console.log("Fonction array"),
    isArray: function() { return this.array(); },
    empty: () => console.log("Fonction empty"),
    isEmpty: function() { return this.empty(); }
};

// Simulation de l'ancienne méthode d'exportation
console.log("\n1. Exports initiaux :");
console.log(Object.keys(oldExports));

// Ajout automatique des préfixes (problème ici)
Object.entries(oldExports).forEach(([key, value]) => {
    const newKey = `is${key.charAt(0).toUpperCase() + key.slice(1)}`;
    oldExports[newKey] = value;
});

console.log("\n2. Après ajout automatique des préfixes :");
console.log(Object.keys(oldExports));

// ============================================
// Nouvelle méthode (sans doublons)
console.log("\n\n=== NOUVELLE MÉTHODE (SANS DOUBLONS) ===");

const newExports = {
    array: () => console.log("Fonction array"),
    isArray: function() { return this.array(); },
    empty: () => console.log("Fonction empty"),
    isEmpty: function() { return this.empty(); }
};

console.log("\n1. Exports initiaux :");
console.log(Object.keys(newExports));

// Nouvelle méthode d'ajout de préfixes
Object.entries(newExports).forEach(([key, value]) => {
    if (!key.startsWith('is')) {  // On ne traite que les clés sans 'is'
        const newKey = `is${key.charAt(0).toUpperCase() + key.slice(1)}`;
        if (!newExports[newKey]) {  // On n'écrase pas les clés existantes
            newExports[newKey] = value;
        }
    }
});

console.log("\n2. Après ajout intelligent des préfixes :");
console.log(Object.keys(newExports));

// Exemple d'utilisation
console.log("\n3. Vérification des fonctions :");
console.log("newExports.isArray === newExports.array ?", newExports.isArray === newExports.array);
console.log("newExports.isIsArray existe ?", 'isIsArray' in newExports);
