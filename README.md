# jlang — JavaScript Utility Library

A modern JavaScript utility library inspired by PHP and Python, providing essential helper functions that are missing from native JavaScript. Perfect for developers who miss the simplicity of `isset()`, `empty()`, and other utility functions.

## Features

- **Zero dependencies** - Pure JavaScript, no bloat
- **CommonJS compatible** - Works in Node.js environments
- **PHP-inspired** - Familiar functions you already know and love
- **Modular design** - Import only what you need
- **Multiple naming conventions** - Both camelCase and PascalCase variants available

## Installation

```bash
npm install jlang
```

## Quick Start

```js
const { isset, isEmpty, isArray, toJson,fromJson } = require('jlang');

// Check if variable exists (like PHP's isset)
if (isset(variable)) {
  console.log('Variable exists!');
}

// Check if value is empty
if (isEmpty(data)) {
  console.log('Data is empty');
}

// Check if value is an array
if (isArray(myList)) {
  console.log('It\'s an array!');
}

// JSON utilities
const jsonString = toJson({ name: 'John' });
const parsed = fromJson(jsonString);
```

---



## 🧩 Modules et méthodes

### 📌 `is` — vérifications simples

📍 Ce module contient des méthodes pour tester des valeurs.

| Méthode           | Description                                                                    | Natifs JS existants                                                               |
| ----------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| `isset(value)`    | Vérifie que la valeur n’est ni `null` ni `undefined`.                          | ✘ (JS utilise `typeof … !== 'undefined' && value !== null`) ([Stack Overflow][2]) |
| `isEmpty(value)`    | Vérifie si une valeur est “vide” (string vide, array vide, object sans clés).  | ✘                                                                                 |
| `isArray(value)`    | Vérifie si c’est un Array.                                                     | Existe : `Array.isArray()` ([MDN Web Docs][3])                                    |
| `string(value)`   | Vérifie si c’est une String. - en développement                                                  | ✘                                                                                 |
| `isAlpha(str)`    | Vérifie si tous les caractères sont alphabétiques, comme `ctype_alpha` de PHP. | ✘ (disponibles dans locutus/php/ctype) ([Locutus][4])                             |
| `hasAlpha(str)`    | Vérifie si la chaine contient au moins un caractère alphabétique, comme `ctype_alpha` de PHP. | ✘ (disponibles dans locutus/php/ctype) ([Locutus][4])                             |

---

## 🚀 Exemple d’utilisation

```js
import { is } from './index.js';


if (is.isset(userInput) && Is.array(data)) {
  console.log('Valid array:', data);
}

import { isset,isArray } from './index.js';
if (isset(userInput) && isArray(data)) {
  console.log('Valid array:', data);
}


```

---

## 📌 Règles de contribution

1. **Avant d’ajouter une méthode**, vérifie si elle :

   * Existe déjà dans JS natif.
   * Est fournie par une bibliothèque utilitaire reconnue (ex. Lodash, utilities‑js) ([IronPDF][6]).
2. **Chaque méthode doit être testée** (tests unitaires).
3. Respecter les conventions de nommage et structure modulaire.
4. Les méthodes doivent être **pures (sans side‑effects)** autant que possible.
5. Documenter chaque nouvelle méthode dans le README.

---

## 🧪 Tests

Ajouter des tests dans un dossier `tests/` avec un runner comme **Jest** ou **Vitest**. Couvre :

* Cas normaux
* Cas limites (`null`, `undefined`, chaînes vides, tableaux vides, etc.)

---

## 📜 Licence

Ce projet est sous licence **MIT** — contributions bienvenues.

---

[1]: https://stackoverflow.com/questions/5436953/php-isset-equivalent-in-javascript?utm_source=chatgpt.com "php isset() equivalent in javascript - Stack Overflow"
[2]: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray "Array : méthode statique isArray() - JavaScript | MDN"
[3]: https://locutus.io/php/ctype/ctype_alpha/"PHP's ctype_alpha in JavaScript | Locutus"
[4]: https://www.condorinformatique.com/manuali/CourseJavaScript.pdf "ÉLÉMENTS DE JAVASCRIPT"
[5]: https://ironpdf.com/fr/nodejs/blog/node-help/lodash-npm/ "Lodash NPM (Comment ça marche pour les développeurs)"
