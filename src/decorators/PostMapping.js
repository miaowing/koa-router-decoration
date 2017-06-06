import Route from './Route';
import {POST} from '../HttpMethod';

export default function PostMapping(path, ...middleware) {
    return Route(path, POST, ...middleware);
}