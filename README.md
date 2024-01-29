# project-demo

### Ts 的声明文件放置哪里可以生效呢

什么是声明文件 以 .d.ts 结尾的文件

> 1. 放在 tsconfig.json 里面的 include中
> 2. node_modules 里面的 @types 下面
> 3. typeRoots: [] 此配置会导致 1 2 配置失效
> 4. 与 js 代码所在目录相同 并且与 js 的文件名都一样的

### 如何编写声明文件

> 1. 手动:
>    对于有些库,开始的时候就是 js 开发的,但是更改为 ts的成本较高,所以就需要手动编写声明文件

declare namespace 声明全局变量

> 模块声明
> ··· ts

```ts
- 比如说我们安装好了 lodash, 我们使用其内部的一个方法
import _ from 'lodash'
const newarr = _.chunk([1,2,3,4,5],2)

- 但是我们在 ts 中使用的时候,会报错,因为 ts 不知道这个方法的存在

解决: const _ = require('lodash')
但是此时不会提供类型检查给你

所以我们创建一个声明文件
declare module 'lodash' {
  export function chunk<T>(arr: T[], size: number):T[]
  // export function chunk(arr: any[], size: number): any[]
  // import _ from 'lodash'
  // export default _
}
```

三斜线指令 在一个声明文件里面包含另外改一个声明文件
/// <reference path="" />

> 2. 自动生成:
>    工程是使用 ts 开发的, 发布(编译)之后,发布的是 Js文件,如果发布的文件需要被别人使用,那么别人使用的时候,就需要有声明文件.

配置 tsconfig.json

```json
{
  "compilerOptions": {
    "declaration": true,
    "declarationDir": "./dist"
  }
}
```
