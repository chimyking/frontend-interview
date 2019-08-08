## 时间循环步奏

**说法一**

- 1.函数入栈，当 Stack 中执行到异步任务的时候，就将他丢给 WebAPIs,接着执行同步任务,直到 Stack 为空；
- 2.此期间 WebAPIs 完成这个事件，把回调函数放入队列中等待执行（微任务放到微任务队列，宏任务放到宏任务队列）
- 3.执行栈为空时，Event Loop 把微任务队列执行清空；
- 4.微任务队列清空后，进入宏任务队列，取队列的第一项任务放入 Stack(栈）中执行，回到第 1 步。

**说法二**

- 1.首先执行 script，script 被称为全局任务，也属于 macrotask;
- 2.当 macrotask 执行完以下，执行所有的微任务；
- 3.微任务全部执行完，再取任务队列中的一个宏任务执行。

**[说法三](https://juejin.im/post/5b97d2b55188255c781ca228)**

① Javascript 内核加载代码到执行栈
② 执行栈依次执行主线程的同步任务，过程中若遇调用了异步 Api 则会添加回调事件到回调队列中。且微任务事件添加到微任务队列中，宏任务事件添加到宏任务队列中去。直到当前执行栈中代码执行完毕。
③ 开始执行当前所有微任务队列中的微任务回调事件。 (:smirk:注意是所有哦，相当于清空队列)
④ 取出宏任务队列中的第一条(先进先出原则哦)宏任务，放到执行栈中执行。
⑤ 执行当前执行栈中的宏任务，若此过程总又再遇到微任务或者宏任务，继续把微任务和宏任务进行各自队伍的入队操作，然后本轮的宏任务执行完后，又把本轮产生的微任务一次性出队都执行了。
⑥ 以上操作往复循环...就是我们平时说的 eventLoop 了

**event loop 的处理过程（Processing model）**
一个 event loop 只要存在，就会不断执行下边的步骤： 1.在 tasks 队列中选择最老的一个 task,用户代理可以选择任何 task 队列，如果没有可选的任务，则跳到下边的 microtasks 步骤。 2.将上边选择的 task 设置为正在运行的 task。
3.Run: 运行被选择的 task。 4.将 event loop 的 currently running task 变为 null。 5.从 task 队列里移除前边运行的 task。
6.Microtasks: 执行 microtasks 任务检查点。（也就是执行 microtasks 队列里的任务） 7.更新渲染（Update the rendering）... 8.如果这是一个 worker event loop，但是没有任务在 task 队列中，并且 WorkerGlobalScope 对象的 closing 标识为 true，则销毁 event loop，中止这些步骤，然后进行定义在 Web workers 章节的 run a worker。 9.返回到第一步。

**microtasks 检查点（microtask checkpoint）**
当用户代理去执行一个 microtask checkpoint，如果 microtask checkpoint 的 flag（标识）为 false，用户代理必须运行下面的步骤： 1.将 microtask checkpoint 的 flag 设为 true。
2.Microtask queue handling: 如果 event loop 的 microtask 队列为空，直接跳到第八步（Done）。 3.在 microtask 队列中选择最老的一个任务。 4.将上一步选择的任务设为 event loop 的 currently running task。 5.运行选择的任务。 6.将 event loop 的 currently running task 变为 null。 7.将前面运行的 microtask 从 microtask 队列中删除，然后返回到第二步（Microtask queue handling）。
8.Done: 每一个 environment settings object 它们的 responsible event loop 就是当前的 event loop，会给 environment settings object 发一个 rejected promises 的通知。 9.清理 IndexedDB 的事务。 10.将 microtask checkpoint 的 flag 设为 flase。

## 浏览器

**微任务**

- promise.then
- messageChannel
- MutationObserver
- Object.observe
- MutationObserver
- process.nextTick 、Promise 、MutationObserver 、async(实质上也是 promise)
  优先级： process.nextTick > Promise > MutationOberser

**宏任务**

- setTimeout
- setInterval
- setImmediate(只兼容 ie)
  setTimeOut 、 setInterval 、 setImmediate 、 I/O 、 各种 callback、UI 渲染等
  优先级： 主代码块 > setImmediate > MessageChannel > setTimeOut/setInterval

事件回调
XHR 回调
IndexDB 数据库操作等 I/O
setTimeout / setInterval
history.back

## Node

**微任务**

- promise.then
- nextTick
- messageChannel
- mutationObersve

**宏任务**

- setTimeout
- setInterval
- setImmediate
- io 文件操作

## 基础知识

### 进程 (process)与线程 (thread)

进程是操作系统分配资源和调度任务的基本单位,线程是建立在进程上的一次程序运行单位，一个进程上可以有多个线程。

### 堆（heap）

对象被分配在一个堆中，即用以表示一个大部分非结构化的内存区域。

### 栈（stack）

函数调用形成一个栈帧;

### 任务队列（queue）—— 特点：先进先出(FIFO)

一个 JavaScript 运行时包含了一个待处理的消息队列。 每一个消息都有一个为了处理这个消息相关联的函数
任务队列以事件环来协调事件，用户交互，脚本，渲染，网络等。

### 事件环 Eventloop

简单来说，每个线程都有他自己的事件环，浏览器也拥有自己的事件环；事件环是一种运行时机制，它像个钟表一样，每滴答一下，就去看看 stack 里有没有事需要处理，没有的话就去事件队列（Event Queue）看看有没有事做。
此处大家需要明白，事件环并不是定死的某个规矩，需要根据不同的运行时进行自己的一套规则。

### 微任务

> Each event loop has a microtask queue. A microtask is a task that is originally to be queued on the microtask queue rather than a task queue. There are two kinds of microtasks: solitary callback microtasks, and compound microtasks.

每个 eventloop 都有一个微任务队列，微任务最初是被放到微任务队列而不是任务队列。

### 宏任务

> One go-around of the event loop will have exactly one task being processed from the macrotask queue (this queue is simply called the task queue in the WHATWG specification).

每个事件环必须有一个来自宏任务队列的任务正在执行。

每个线程都有自己的 event loop。
浏览器可以有多个 event loop，browsing contexts 和 web workers 就是相互独立的。
所有同源的 browsing contexts 可以共用 event loop，这样它们之间就可以相互通信。
