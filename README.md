# koa-router-decoration

## Usage
```
npm install koa-router-decoration --save
npm install koa-validator-middleware --save
```

### UserController.js
```javascript
import {RouterController, RequestMapping, GetMapping, PostMapping, DeleteMapping} from 'koa-router-decoration';
import {NotEmpty} from 'koa-validator-middleware';

@RequestMapping('/users')
export default class UserController extends RouterController {
    constructor() {
        super();
    }
    
    @GetMapping('/')
    async getUsers(ctx) {
        
    }
    
    @GetMapping('/:userId')
    async getUser(ctx) {
        const userId = ctx.params.userId;
    }
    
    @PostMapping('/', NotEmpty('request.body.username'))
    async createUser(ctx) {
        if (!ctx.validation.pass) {
            //@see https://github.com/miaowing/koa-validator-middleware for detail.
        }
    }
    
    @DeleteMapping('/:userId')
    async deleteUser(ctx) {
        
    }
}
```

### app.js
```javascript
import Koa from 'koa';
import KoaRouter from 'koa-router';

import UserController from './UserController';

const app = new Koa();
const rootRouter = new KoaRouter();

rootRouter.use(new UserController());

app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());

app.start(3000);
````

## API

### Route(path, method, ...middleware)

### RequestMapping(path, method, ...middleware)

The same as @Route.

### GetMapping(path, ...middleware)

### PostMapping(path, ...middleware)

### PutMapping(path, ...middleware)

### DeleteMapping(path, ...middleware)