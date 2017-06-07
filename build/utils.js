'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cloneFunction = cloneFunction;
exports.assert = assert;
/**
 * "Clones" the given function by wrapping it into a pass-through function.
 * Doesn't preserve arity ('.length') and argument names.
 */
function cloneFunction(func) {
    return function (...args) {
        return func.call(this, ...args);
    };
}

/**
 * Assertion utility.
 */
function assert(ok, ...args) {
    if (!ok) {
        throw new Error(args.join(' '));
    }
}