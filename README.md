Voici un **README clair et complet** pour ton projet **jlang**, conçu pour aider les développeurs à contribuer, avec une attention particulière sur **ce qui est réellement utile** (pas de duplications avec des méthodes natives de JS ou des modules NPM existants quand ce n’est pas nécessaire).

---

# jlang — JavaScript Utility Library

**jlang** est une librairie utilitaire JavaScript orientée **POO moderne** pour simplifier les méthodes courantes et combler les absences du langage, inspirée des fonctions utiles de PHP comme `isset()`, `ctype_alpha`, etc. Elle vise à être **modulaire, maintenable et intuitive**.

---

## Objectif

* Simplifier et clarifier les méthodes courantes du JavaScript natif.
* Ajouter des fonctions **inspirées d’autres langages** lorsque elles n’existent pas déjà.
* Regrouper ces méthodes dans des classes modulaires (POO) pour **facilité d’utilisation et de contribution**.
* Exporter chaque classe individuellement pour permettre des imports précis.

---

## 📦 Structure du projet

```
jlang/
├─ is/
│  ├─ index.js       # Regroupe toutes les méthodes `is.*`
│  ├─ isset.js       # Vérifie non-null/undefined
│  ├─ empty.js       # Vérifie si vide (string, array, object)
│  ├─ array.js
│  ├─ string.js
│  └─ ctype.js       # Fonctions inspirées de ctype_*
├─ str/
│  ├─ index.js
│  └─ substr.js
├─ math/
│  ├─ index.js
│  └─ utilities.js
├─ index.js          # Exporte tous les modules
└─ README.md
```

---

## 🧠 Philosophie

> **N’ajoute pas une méthode si elle existe déjà nativement dans JavaScript ou si une bibliothèque populaire la propose déjà**, à moins que la version native soit trop verbeuse ou manque d’un comportement attendu.
> Des bibliothèques existantes comme **Lodash** ou **utilities‑js** ont déjà des versions similaires de beaucoup de fonctions utilitaires (ex. `isEmpty`, `isArray`, etc.) ; elles peuvent servir de référence ou d’inspiration, mais jlang doit rester **simple, modulaire et légère**. ([NPM][1])

---

## 🧩 Modules et méthodes

### 📌 `is` — vérifications simples

📍 Ce module contient des méthodes pour tester des valeurs.

| Méthode           | Description                                                                    | Natifs JS existants                                                               |
| ----------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| `isset(value)`    | Vérifie que la valeur n’est ni `null` ni `undefined`.                          | ✘ (JS utilise `typeof … !== 'undefined' && value !== null`) ([Stack Overflow][2]) |
| `empty(value)`    | Vérifie si une valeur est “vide” (string vide, array vide, object sans clés).  | ✘                                                                                 |
| `array(value)`    | Vérifie si c’est un Array.                                                     | Existe : `Array.isArray()` ([MDN Web Docs][3])                                    |
| `string(value)`   | Vérifie si c’est une String.                                                   | ✘                                                                                 |
| `ctypeAlpha(str)` | Vérifie si tous les caractères sont alphabétiques, comme `ctype_alpha` de PHP. | ✘ (disponibles dans locutus/php/ctype) ([Locutus][4])                             |

---

### 📌 `str` — manipulation de chaînes

| Méthode                      | Description             | Natifs JS                                                          |
| ---------------------------- | ----------------------- | ------------------------------------------------------------------ |
| `substr(str, start, length)` | Substring comme en PHP. | Existe : `String.prototype.substring()` ([Condor Informatique][5]) |
| …                            | …                       | …                                                                  |

> Pour les méthodes déjà natives (ex. substring, trim, toLowerCase), jlang peut fournir **alias simples** si cela améliore la lisibilité, sinon on encourage l’usage natif.

---

### 📌 `math` — fonctions mathématiques utilitaires

| Méthode                  | Description                                  |
| ------------------------ | -------------------------------------------- |
| `randomInt(min, max)`    | Renvoie un entier aléatoire entre min et max |
| `clamp(value, min, max)` | Limite une valeur dans une plage             |

---

## 🚀 Exemple d’utilisation

```js
import { Is } from './is/index.js';
import { Str } from './str/index.js';
import { MathUtils } from './math/index.js';

if (Is.isset(userInput) && Is.array(data)) {
  console.log('Valid array:', data);
}

console.log(Str.substr('Hello World', 0, 5)); // "Hello"
console.log(MathUtils.randomInt(1, 10)); // ex: 7
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

[1]: https://www.npmjs.com/utilities-js?utm_source=chatgpt.com "utilities-js"
[2]: https://stackoverflow.com/questions/5436953/php-isset-equivalent-in-javascript?utm_source=chatgpt.com "php isset() equivalent in javascript - Stack Overflow"
[3]: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray?utm_source=chatgpt.com "Array : méthode statique isArray() - JavaScript | MDN"
[4]: https://locutus.io/php/ctype/ctype_alpha/?utm_source=chatgpt.com "PHP's ctype_alpha in JavaScript | Locutus"
[5]: https://www.condorinformatique.com/manuali/CourseJavaScript.pdf?utm_source=chatgpt.com "ÉLÉMENTS DE JAVASCRIPT"
[6]: https://ironpdf.com/fr/nodejs/blog/node-help/lodash-npm/?utm_source=chatgpt.com "Lodash NPM (Comment ça marche pour les développeurs)"
