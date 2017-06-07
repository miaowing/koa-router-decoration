'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DeleteMapping;

var _Route = require('./Route');

var _Route2 = _interopRequireDefault(_Route);

var _HttpMethod = require('../HttpMethod');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DeleteMapping(path, ...middleware) {
    return (0, _Route2.default)(path, _HttpMethod.DELETE, ...middleware);
}