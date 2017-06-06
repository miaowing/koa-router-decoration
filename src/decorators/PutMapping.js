import Route from './Route';
import {PUT} from '../HttpMethod';

export default function PutMapping(path, ...middleware) {
    return Route(path, PUT, ...middleware);
}