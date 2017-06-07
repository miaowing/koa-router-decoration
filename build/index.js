'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpMethod = exports.DeleteMapping = exports.PutMapping = exports.PostMapping = exports.GetMapping = exports.Route = exports.RequestMapping = undefined;

var _Route = require('./decorators/Route');

var _Route2 = _interopRequireDefault(_Route);

var _GetMapping = require('./decorators/GetMapping');

var _GetMapping2 = _interopRequireDefault(_GetMapping);

var _PostMapping = require('./decorators/PostMapping');

var _PostMapping2 = _interopRequireDefault(_PostMapping);

var _PutMapping = require('./decorators/PutMapping');

var _PutMapping2 = _interopRequireDefault(_PutMapping);

var _DeleteMapping = require('./decorators/DeleteMapping');

var _DeleteMapping2 = _interopRequireDefault(_DeleteMapping);

var _HttpMethod = require('./HttpMethod');

var HttpMethod = _interopRequireWildcard(_HttpMethod);

var _RouterDecorator = require('./RouterDecorator');

var _RouterDecorator2 = _interopRequireDefault(_RouterDecorator);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RequestMapping = _Route2.default;

exports.default = _RouterDecorator2.default;
exports.RequestMapping = RequestMapping;
exports.Route = _Route2.default;
exports.GetMapping = _GetMapping2.default;
exports.PostMapping = _PostMapping2.default;
exports.PutMapping = _PutMapping2.default;
exports.DeleteMapping = _DeleteMapping2.default;
exports.HttpMethod = HttpMethod;