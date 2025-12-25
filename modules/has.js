const alpha = require("./utils/has/alpha");

module.exports = {
    alpha,
    isAlpha: alpha,
};

Object.entries(module.exports).forEach(([key,value]) => {
    if(!key.startsWith("has"))
        module.exports[`has${key.charAt(0).toUpperCase() + key.slice(1)}`] = value;
});