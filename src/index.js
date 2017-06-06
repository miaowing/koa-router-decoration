import Route from './decorators/Route';
import GetMapping from './decorators/GetMapping';
import PostMapping from './decorators/PostMapping';
import PutMapping from './decorators/PutMapping';
import DeleteMapping from './decorators/DeleteMapping';
import * as HttpMethod from './HttpMethod';

import RouterController from './RouterController';

const RequestMapping = Route;

export {RouterController, RequestMapping, Route, GetMapping, PostMapping, PutMapping, DeleteMapping, HttpMethod};