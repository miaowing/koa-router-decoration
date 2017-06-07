'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HttpMethod = undefined;
exports.default = Route;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const Router = require('koa-router');

const HttpMethod = exports.HttpMethod = {
    HEAD: 'head',
    OPTIONS: 'options',
    GET: 'get',
    PUT: 'put',
    PATCH: 'patch',
    POST: 'post',
    DELETE: 'delete'
};

// decorator factory
function Route(path, method, ...middleware) {

    return (target, key, descriptor) => {
        utils.assert(!!path, '@Route should have at least "path" argument');

        if (typeof target !== 'function' && !target.router) {
            target.router = new Router();
        }

        // Decorator applied to Class (for Constructor injection).
        if (typeof target === 'function' && key === undefined && descriptor === undefined) {
            utils.assert(!method, '@Route on Type should not have "method"');
            target.prototype.router.prefix(path);
            if (middleware.length > 0) {
                target.prototype.router.use(...middleware);
            }
            return;
        }

        // // Decorator applied to member (method or property).
        utils.assert(!!method, '@Route on method should have "method" as second argument');

        switch (method) {
            case HttpMethod.HEAD:
                target.router.head(path, ...middleware, descriptor.value);
                break;
            case HttpMethod.OPTIONS:
                target.router.options(path, ...middleware, descriptor.value);
                break;
            case HttpMethod.GET:
                target.router.get(path, ...middleware, descriptor.value);
                break;
            case HttpMethod.PUT:
                target.router.put(path, ...middleware, descriptor.value);
                break;
            case HttpMethod.PATCH:
                target.router.patch(path, ...middleware, descriptor.value);
                break;
            case HttpMethod.POST:
                target.router.post(path, ...middleware, descriptor.value);
                break;
            case HttpMethod.DELETE:
                target.router.delete(path, ...middleware, descriptor.value);
                break;
            default:
                throw new Error('@Route decorator "method" is not valid');
        }
    };
}