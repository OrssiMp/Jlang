const {
  isAlpha,
  isFunction,
  functionExists,
  isArray,
  isEmpty,
  isObject,
  isset,
  isDefined,
 defined,
  isJson,
  toJson
} = require("./index");
const listFunctions = require("./modules/listFunctions");

// Tests
const testValues = [
  ["empty", "isEmpty", "array", "isArray"],
  [],
  "not an array",
  {},
  null,
];
let a = ["a", "b", "c"];
testValues.forEach((value) => {
  console.log(`${JSON.stringify(value)} is array:`, isArray(value));
  console.log(
    `${JSON.stringify(value)} is non-empty array:`,
    isArray(value, false),
    "and",
    isEmpty(a)
  );
});
// Tests de la fonction isset
console.log("\n=== Tests de isset ===");

// 1. Tests basiques
console.log("1. Tests basiques:");
console.log("isset(undefined)", isset(undefined)); // false
console.log("isset(null)", isset(null)); // false
console.log("isset(0)", isset(0)); // true
console.log("isset('')", isset("")); // true
console.log("isset(false)", isset(false)); // true

// Tests de la fonction isDefined
console.log("\n=== Tests de isDefined ===");
console.log("isDefined(undefined)", isDefined(undefined)); // false
console.log("isDefined(null)", isDefined(null)); // true
console.log("isDefined(0)", isDefined(0)); // true
console.log("isDefined('')", isDefined("")); // true
console.log("isDefined(false)", isDefined(false)); // true

// Test avec une variable non initialisée
let undefVar;
console.log("let undefVar; isDefined(undefVar)", isDefined(undefVar)); // false

// Test avec defined (alias de isDefined)
console.log("\n=== Tests de l'alias 'defined' ===");
console.log("defined(undefined)", defined(undefined)); // false
console.log("defined(null)", defined(null)); // true

// 2. Tests avec tableaux
console.log("\n2. Tests avec tableaux:");
const arr = ["a", "b", "c"];
console.log("arr[0]", isset(arr, 0)); // true
console.log("arr[1]", isset(arr, 1)); // true
console.log("arr[4]", isset(arr, 4)); // false (hors limites)
console.log("arr[-1]", isset(arr, -1)); // false (index invalide)

// 3. Tests avec objets
console.log("\n3. Tests avec objets:");
const obj = {
  user: {
    name: "John",
    address: {
      city: "Paris",
      zip: null,
    },
  },
  items: ["a", "b"],
};

console.log("obj.user.name", isset(obj, "user", "name")); // true
console.log("obj.user.age", isset(obj, "user", "age")); // false (n'existe pas)
console.log("obj.user.address.city", isset(obj, "user", "address", "city")); // true
console.log("obj.user.address.zip", isset(obj, "user", "address", "zip")); // false (valeur null)
console.log("obj.items[0]", isset(obj, "items", 0)); // true
console.log("obj.items[2]", isset(obj, "items", 2)); // false (hors limites)

// 4. Tests avec chemins invalides
console.log("\n4. Tests avec chemins invalides:");
console.log("obj.user.phone.number", isset(obj, "user", "phone", "number")); // false (phone n'existe pas)
console.log("obj.user.name.first", isset(obj, "user", "name", "first")); // false (name est une chaîne)

// Définissons quelques fonctions de test
global.maFonctionTest = function () {
  return "test";
};
const autreFonction = () => {};

// Tests de la fonction isFunction
console.log("\n=== Tests de isFunction ===");
console.log(
  "Fonction classique:",
  isFunction(function () {})
); // true
console.log(
  "Fonction fléchée:",
  isFunction(() => {})
); // true
console.log("Classe:", isFunction(class {})); // true
console.log("Méthode d'objet:", isFunction({ method() {} }.method)); // true

// Tests avec des noms de fonctions
console.log("\n=== Tests avec noms de fonctions ===");
console.log("Fonction globale par nom:", isFunction("maFonctionTest")); // true
console.log("Fonction native par nom:", isFunction("setTimeout")); // true (dans Node.js et navigateur)
console.log("Fonction locale par nom:", isFunction("autreFonction")); // true (si dans le scope global)
console.log("Fonction inexistante par nom:", isFunction("fonctionInexistante")); // false

// Tests avec des valeurs non-fonctions
console.log("\n=== Tests avec valeurs non-fonctions ===");
console.log("Chaîne de caractères:", isFunction("function")); // false
console.log("Nombre:", isFunction(123)); // false
console.log("Objet:", isFunction({})); // false
console.log("Tableau:", isFunction([])); // false
console.log("null:", isFunction(null)); // false

// Tests de la fonction functionExists
console.log("\n=== Tests de functionExists ===");
console.log("Fonction globale par nom:", functionExists("maFonctionTest")); // true
console.log("Fonction native par nom:", functionExists("setTimeout")); // true (fonction native)
console.log("Constructeur String:", functionExists("String")); // false (constructeur, pas une fonction utilisateur)
console.log("Fonction locale par nom:", functionExists("autreFonction")); // false (n'est pas dans le scope global)
console.log("Fonction inexistante:", functionExists("fonctionInexistante")); // false
console.log("Avec une fonction directe:", functionExists(maFonctionTest)); // false (doit être un nom de fonction)
console.log("Avec un nombre:", functionExists(123)); // false
console.log("Avec null:", functionExists(null)); // false

console.log(isAlpha("éèê")); // true
console.log(isAlpha("Привет")); // true
console.log(isAlpha("123")); // false

// Tests pour isJson
console.log("\n=== Tests pour isJson ===");
console.log("JSON valide (objet):", isJson('{"name":"John", "age":30}'));  // true
console.log("JSON valide (tableau):", isJson('[1, 2, 3]'));               // true
console.log("JSON valide (chaîne):", isJson('"simple string"'));          // true
console.log("JSON invalide (chaîne simple):", isJson('not json'));        // false
console.log("JSON invalide (accolade manquante):", isJson('{"name":"John"')); // false
console.log("Chaîne vide:", isJson(''));                                  // false
console.log("null:", isJson(null));                                      // false
console.log("Objet JavaScript:", isJson({name: "John"}));                // false (doit être une chaîne)

// Tests pour toJson
console.log("\n=== Tests pour toJson ===");
console.log("Objet simple:", toJson({name: "John", age: 30}));
console.log("Tableau:", toJson([1, 2, 3]));
console.log("Chaîne simple:", toJson("{Hello World}"));
console.log("Nombre:", toJson(42));
console.log("Booléen:", toJson(true));
console.log("Null:", toJson(null));
console.log("Objet complexe:", toJson({
  name: "John",
  age: 30,
  address: {
    city: "Paris",
    country: "France"
  },
  hobbies: ["reading", "coding", "music"]
}));

// Tests pour la conversion JSON bidirectionnelle avec toJson
console.log("\n=== Tests pour toJson (sérialisation/désérialisation) ===");

// 1. Test de désérialisation d'un objet
const jsonString = '{"name":"John","age":30,"isActive":true,"hobbies":["reading","coding"],"address":{"city":"Paris"}}';
const parsedObj = toJson(jsonString);
console.log("Type du résultat:", typeof parsedObj);
console.log("Nom:", parsedObj.name);
console.log("Âge:", parsedObj.age);
console.log("Actif:", parsedObj.isActive);
console.log("Hobbies:", parsedObj.hobbies);
// console.log("Ville:", parsedObj.address.city);

// 2. Test avec tableau JSON
const jsonArray = '[1, 2, 3, "quatre"]';
console.log("\nTableau parsé:", toJson(jsonArray));

// 3. Test avec fonction de transformation (reviver)
const withDate = '{"date":"2025-12-18T20:30:00.000Z"}';
const withDateRevived = toJson(withDate, (key, value) => {
  if (key === 'date') return new Date(value);
  return value;
});
console.log("\nAvec date (sans reviver):", toJson(withDate).date, typeof toJson(withDate).date);
console.log("Avec date (avec reviver):", withDateRevived.date, typeof withDateRevived.date);

// 4. Test de sérialisation avec formatage
console.log("\nSérialisation avec formatage:");
console.log(toJson(parsedObj, null, 2));

// 5. Test de gestion d'erreur
try {
  console.log("\nTest d'erreur avec JSON invalide:");
  console.log(toJson('{invalid json}'));
} catch (error) {
  console.log("Erreur capturée:", error.message);
}

// 6. Test de sérialisation d'objets complexes
const complexObj = {
  name: "John",
  age: 30,
  isActive: true,
  address: {
    city: "Paris",
    country: "France"
  },
  hobbies: ["reading", "coding"],
  birthDate: new Date(1990, 0, 1),
  toJSON: function() {
    return {
      ...this,
      age: this.age,
      birthYear: this.birthDate.getFullYear()
    };
  }
};

console.log("\nSérialisation d'objet avec toJSON personnalisé:");
console.log(toJson(complexObj, null, 2));

const utils = {
    add: (a, b) => a + b,
   subtract: (a, b) => a - b,
   constant: 42
  };

console.log(listFunctions(utils));
console.log(!isArray(utils) , isObject(utils));
