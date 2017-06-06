import Route from './Route';
import {DELETE} from '../HttpMethod';

export default function DeleteMapping(path, ...middleware) {
    return Route(path, DELETE, ...middleware);
}