# jlang — JavaScript Utility Library

A modern JavaScript utility library inspired by PHP and Python, providing essential helper functions that are missing from native JavaScript. Perfect for developers who miss the simplicity of functions like `isset`, `isEmpty`, and other small, focused helpers.

## Features

- **Zero dependencies** — Pure JavaScript, no bloat  
- **CommonJS compatible** — Works in Node.js environments  
- **PHP-inspired** — Familiar functions you already know and love  
- **Modular design** — Import only what you need  
- **Multiple naming conventions** — Both camelCase and PascalCase variants available

## Installation

```bash
npm install jlang
```

## Quick Start

```js
const { isset, isEmpty, isArray, toJson, fromJson } = require('jlang');

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

## 🧩 Modules and methods

### 📌 `is` — simple checks

This module contains methods to test values.

| Method            | Description                                                                          | Native JS equivalent / notes                                                    |
| ----------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| `isset(value)`    | Checks that the value is neither `null` nor `undefined`.                            | ✘ (JS uses `typeof … !== 'undefined' && value !== null`) ([1])                 |
| `isEmpty(value)`  | Checks whether a value is "empty" (empty string, empty array, object without keys). | ✘                                                                                |
| `isArray(value)`  | Checks if the value is an Array.                                                     | Exists: `Array.isArray()` ([2])                                                 |
| `string(value)`   | Checks if it is a String. (work in progress)                                        | ✘                                                                                |
| `isAlpha(str)`    | Checks if all characters are alphabetic (like PHP's `ctype_alpha`).                 | ✘ (available via packages like Locutus) ([3])                                   |
| `hasAlpha(str)`   | Checks if the string contains at least one alphabetic character.                    | ✘ (available via packages like Locutus) ([3])                                   |

---

## 🚀 Usage example

```js
import { is } from './index.js';

if (is.isset(userInput) && is.isArray(data)) {
  console.log('Valid array:', data);
}

import { isset, isArray } from './index.js';
if (isset(userInput) && isArray(data)) {
  console.log('Valid array:', data);
}
```

---

## 📌 Contribution rules

1. **Before adding a method**, check if it:
   - Already exists in native JS.
   - Is provided by a well-known utility library (e.g. Lodash, utilities-js) ([5]).
2. **Every method must be tested** (unit tests).
3. Follow naming conventions and modular structure.
4. Methods should be **pure (no side effects)** whenever possible.
5. Document each new method in the README.

---

## 🧪 Tests

Add tests in a `tests/` folder using a runner like **Jest** or **Vitest**. Cover:

- Normal cases
- Edge cases (`null`, `undefined`, empty strings, empty arrays, etc.)

---

## 📜 License

This project is licensed under **MIT** — contributions welcome.

---

References:

1. https://stackoverflow.com/questions/5436953/php-isset-equivalent-in-javascript "php isset() equivalent in javascript - Stack Overflow"  
2. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray "Array : méthode statique isArray() - JavaScript | MDN"  
3. https://locutus.io/php/ctype/ctype_alpha/ "PHP's ctype_alpha in JavaScript | Locutus"  
4. https://www.condorinformatique.com/manuali/CourseJavaScript.pdf "ÉLÉMENTS DE JAVASCRIPT"  
5. https://ironpdf.com/fr/nodejs/blog/node-help/lodash-npm/ "Lodash NPM (How it works for developers)"