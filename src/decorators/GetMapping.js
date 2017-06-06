import Route from './Route';
import {GET} from '../HttpMethod';

export default function GetMapping(path, ...middleware) {
    return Route(path, GET, ...middleware);
}