### 原始类型有哪几种？null 是对象嘛？
- boolean
- null
- undefined
- number
- string
- symbol

> 另外对于 null 来说，很多人会认为他是个对象类型，其实这是错误的。虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。

### 对象类型和原始类型的不同之处？函数参数是对象会发生什么问题？

在 JS 中，除了原始类型那么其他的都是对象类型了，对象类型和原始类型不同的是，原始类型存储的是值，对象类型存储的是地址（指针）。当你创建了一个对象类型的时候，计算机会在内存中帮我们开辟一个空间来存放值，但是我们需要找到这个空间，这个空间会拥有一个地址（指针）。

### typeof 是否能正确判断类型？instanceof 能正确判断对象的原理是什么？

typeof 对于原始类型来说，除了 null 都可以显示正确的类型.

```
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
```
typeof 对于对象来说，除了函数都会显示 object，所以说 typeof 并不能准确判断变量到底是什么类型

```
typeof [] // 'object'
typeof {} // 'object'
typeof console.log // 'function'
```
如果我们想判断一个对象的正确类型，这时候可以考虑使用 instanceof，因为内部机制是通过原型链来判断的

对于原始类型来说，你想直接通过 instanceof 来判断类型是不行的，当然我们还是有办法让 instanceof 判断原始类型的

```
class PrimitiveString {
  static [Symbol.hasInstance](x) {
    return typeof x === 'string'
  }
}
console.log('hello world' instanceof PrimitiveString) // true
```

### 类型转换.该知识点常在笔试题中见到，熟悉了转换规则就不惧怕此类题目了。

首先我们要知道，在 JS 中类型转换只有三种情况，分别是：
- 转换为布尔值
- 转换为数字
- 转换为字符串

![](images\typeTransfer.webp)

**转Boolean**
在条件判断时，除了 undefined， null， false， NaN， ''， 0， -0，其他所有值都转为 true，包括所有对象。
**对象转原始类型**
- 对象在转换类型的时候，会调用内置的 [[ToPrimitive]] 函数，对于该函数来说，算法逻辑一般来说如下：
- 如果已经是原始类型了，那就不需要转换了
- 调用 x.valueOf()，如果转换为基础类型，就返回转换的值
- 调用 x.toString()，如果转换为基础类型，就返回转换的值
- 如果都没有返回原始类型，就会报错
当然你也可以重写 Symbol.toPrimitive ，该方法在转原始类型时调用优先级最高。

```
let a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  },
  [Symbol.toPrimitive]() {
    return 2
  }
}
1 + a // => 3
```
**四则运算符**
加法运算符不同于其他几个运算符，它有以下几个特点：
- 运算中其中一方为字符串，那么就会把另一方也转换为字符串
- 如果一方不是字符串或者数字，那么会将它转换为数字或者字符串
  
```
1 + '1' // '11'
true + true // 2
4 + [1,2,3] // "41,2,3"
```

另外对于加法还需要注意这个表达式 'a' + + 'b'

```
'a' + + 'b' // -> "aNaN"
```
那么对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字

```
4 * '3' // 12
4 * [] // 0
4 * [1, 2] // NaN
```

**比较运算符**
- 如果是对象，就通过 toPrimitive 转换对象
- 如果是字符串，就通过 unicode 字符索引来比较
```
let a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  }
}
a > -1 // true
```

### 如何正确判断 this？箭头函数的 this 是什么？
场景:
1. 作为函数调用=> this 指向window
2. 作为对象的方法调用，谁调用了，this就指向谁
3. new，this指向新创建出来的对象
4. 事件this，指向点击的dom节点
5. 箭头函数中的this。在定义的是时候固定this指向
6. call、apply、bind 改变this指向方法的第一个参数
7. with 改变this指向

![](images\this.webp)

###　== 和 === 有什么区别？
1. 首先会判断两者类型是否相同。相同的话就是比大小了
2. 类型不相同的话，那么就会进行类型转换
3. 会先判断是否在对比 null 和 undefined，是的话就会返回 true
4. 判断两者类型是否为 string 和 number，是的话就会将字符串转换为 number
5. 判断其中一方是否为 boolean，是的话就会把 boolean 转为 number 再进行判断
6. 判断其中一方是否为 object 且另一方为 string、number 或者 symbol，是的话就会把 object 转为原始类型再进行判断

![](images\equal.webp)

### 什么是闭包？
闭包存在的意义就是让我们可以间接访问函数内部的变量。

### 什么是浅拷贝？如何实现浅拷贝？什么是深拷贝？如何实现深拷贝？
**浅拷贝**
**深拷贝**


### 如何理解原型？如何理解原型链？
![](images\prototype.webp)

### var、let 及 const 区别,什么是提升？什么是暂时性死区？var、let 及 const 区别？

**提升（hoisting）:** 在生命变量的前可以访问变量名，并且提升的是声明。var:undefined,function:fn
在全局作用域下，var声明的变量会挂载到window上

var声明过得的变量可以再次声明。let、const的不可以

**暂时性死区**let、const所在作用域内，在声明变量之前访问变量会报ReferenceErro，这就是暂时性死去，所以用let和const声明的变量不能在声明前使用


### 原型继承和 Class 继承，原型如何实现继承？Class 如何实现继承？Class 本质是什么？
其实在 JS 中并不存在类，class 只是语法糖，本质还是函数。

**组合继承**
**寄生组合继承**
**Class 继承**


### 模块化：为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特点？ (待完善)
使用模块化可以给我们带来以下好处
- 解决命名冲突
- 提供复用性
- 提高代码可维护性

**立即执行函数**
在早期，使用立即执行函数实现模块化是常见的手段，通过函数作用域解决了命名冲突、污染全局作用域的问题
```
(function(globalVariable){
   globalVariable.test = function() {}
   // ... 声明各种变量、函数都不会污染全局作用域
})(globalVariable)
```

**AMD 和 CMD**
鉴于目前这两种实现方式已经很少见到，所以不再对具体特性细聊，只需要了解这两者是如何使用的。
```
// AMD
define(['./a', './b'], function(a, b) {
  // 加载模块完毕可以使用
  a.do()
  b.do()
})
// CMD
define(function(require, exports, module) {
  // 加载模块
  // 可以把 require 写在函数体的任意地方实现延迟加载
  var a = require('./a')
  a.doSomething()
})
```
**CommonJS**
CommonJS 最早是 Node 在使用，目前也仍然广泛使用，比如在 Webpack 中你就能见到它，当然目前在 Node 中的模块管理已经和 CommonJS 有一些区别了。

```
// a.js
module.exports = {
    a: 1
}
// or 
exports.a = 1

// b.js
var module = require('./a.js')
module.a // -> log 1
```
因为 CommonJS 还是会使用到的，所以这里会对一些疑难点进行解析

先说 require 吧
```
var module = require('./a.js')
module.a 
// 这里其实就是包装了一层立即执行函数，这样就不会污染全局变量了，
// 重要的是 module 这里，module 是 Node 独有的一个变量
module.exports = {
    a: 1
}
// module 基本实现
var module = {
  id: 'xxxx', // 我总得知道怎么去找到他吧
  exports: {} // exports 就是个空对象
}
// 这个是为什么 exports 和 module.exports 用法相似的原因
var exports = module.exports 
var load = function (module) {
    // 导出的东西
    var a = 1
    module.exports = a
    return module.exports
};
// 然后当我 require 的时候去找到独特的
// id，然后将要使用的东西用立即执行函数包装下，over
```
另外虽然 exports 和 module.exports 用法相似，但是不能对 exports 直接赋值。因为 var exports = module.exports 这句代码表明了 exports 和 module.exports 享有相同地址，通过改变对象的属性值会对两者都起效，但是如果直接对 exports 赋值就会导致两者不再指向同一个内存地址，修改并不会对 module.exports 起效。

**ES Module**
ES Module 是原生实现的模块化方案，与 CommonJS 有以下几个区别
- CommonJS 支持动态导入，也就是 `require(${path}/xx.js)`，后者目前不支持，但是已有提案
- CommonJS 是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。而后者是异步导入，因为用于浏览器，需要下载文件，如果也采用同步导入会对渲染有很大影响
- CommonJS 在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。但是 ES Module 采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化
- ES Module 会编译成 require/exports 来执行的

### Proxy:Proxy 可以实现什么功能？(待完善)
如果你平时有关注 Vue 的进展的话，可能已经知道了在 Vue3.0 中将会通过 Proxy 来替换原本的 Object.defineProperty 来实现数据响应式。 Proxy 是 ES6 中新增的功能，它可以用来自定义对象中的操作。

`let p = new Proxy(target, handler)`
`target` 代表需要添加代理的对象，`handler `用来自定义对象中的操作，比如可以用来自定义` set` 或者 `get` 函数.
接下来我们通过 Proxy 来实现一个数据响应式

```
let onWatch = (obj, setBind, getLogger) => {
  let handler = {
    get(target, property, receiver) {
      getLogger(target, property)
      return Reflect.get(target, property, receiver)
    },
    set(target, property, value, receiver) {
      setBind(value, property)
      return Reflect.set(target, property, value)
    }
  }
  return new Proxy(obj, handler)
}

let obj = { a: 1 }
let p = onWatch(
  obj,
  (v, property) => {
    console.log(`监听到属性${property}改变为${v}`)
  },
  (target, property) => {
    console.log(`'${property}' = ${target[property]}`)
  }
)
p.a = 2 // 监听到属性a改变
p.a // 'a' = 2
```
在上述代码中，我们通过自定义 set 和 get 函数的方式，在原本的逻辑中插入了我们的函数逻辑，实现了在对对象任何属性进行读写时发出通知。

当然这是简单版的响应式实现，如果需要实现一个 Vue 中的响应式，需要我们在 get 中收集依赖，在 set 派发更新，之所以 Vue3.0 要使用 Proxy 替换原本的 API 原因在于 Proxy 无需一层层递归为每个属性添加代理，一次即可完成以上操作，性能上更好，并且原本的实现有一些数据更新不能监听到，但是 Proxy 可以完美监听到任何方式的数据改变，唯一缺陷可能就是浏览器的兼容性不好了。

### 数组的方法（待完善）
### 异步编程
要彻底搞清楚异步编程，就必须清楚Event Loop 如果对Event Loop不清楚的可以先往下翻，查看下一个小节
#### 并发（concurrency）和并行（parallelism）区别
**并发**是宏观概念，我分别有任务 A 和任务 B，在一段时间内通过任务间的切换完成了这两个任务，这种情况就可以称之为并发。

**并行**是微观概念，假设 CPU 中存在两个核心，那么我就可以同时完成任务 A、B。同时完成多个任务的情况就可以称之为并行。

#### 回调函数（Callback）：什么是回调函数？回调函数有什么缺点？如何解决回调地狱问题？

**回调函数(Callback)**:把一个函数作为另一个函数的参数，在函数体内执行传入的函数

如果多个函数存在依赖关系，就会出现回调地域；
回调函数的问题：
- 嵌套函数存在耦合性，一旦有所改动，就会牵一发为动全身。
- 嵌套函数一多，就很难处理错误

#### Generator

#### Promise

#### async 及 await

#### 常用定时器函数:setTimeout、setInterval、requestAnimationFrame 各有什么特点？

#### Rxjs
#### MutationObserver or process.nextTick
### Event Loop
#### 执行栈：什么是执行栈？
#### 浏览器中的 Event Loop： 异步代码执行顺序？解释一下什么是 Event Loop ？
#### Node 中的 Event Loop：Node 中的 Event Loop 和浏览器中的有什么区别？process.nexttick 执行顺序？
















