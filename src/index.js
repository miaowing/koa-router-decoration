import Route from './decorators/Route';
import GetMapping from './decorators/GetMapping';
import PostMapping from './decorators/PostMapping';
import PutMapping from './decorators/PutMapping';
import DeleteMapping from './decorators/DeleteMapping';
import * as HttpMethod from './HttpMethod';

import RouterDecorator from './RouterDecorator';

const RequestMapping = Route;

export default RouterDecorator;
export {RequestMapping, Route, GetMapping, PostMapping, PutMapping, DeleteMapping, HttpMethod};