'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = PutMapping;

var _Route = require('./Route');

var _Route2 = _interopRequireDefault(_Route);

var _HttpMethod = require('../HttpMethod');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PutMapping(path, ...middleware) {
    return (0, _Route2.default)(path, _HttpMethod.PUT, ...middleware);
}