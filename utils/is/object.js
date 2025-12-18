module.exports = function isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
};