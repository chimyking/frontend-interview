// Buffer.allocUnsafe(size) 
// 如果要分配的内存小于 4 KB， 则会从一个预分配的 Buffer 切割出来。 这可以避免垃圾回收机制因创建太多独立的 Buffer 而过度使用。
let buffer1 = Buffer.allocUnsafe(0)
console.log(buffer1)

// console.log(buffer1.constants.MAX_LENGTH)

// Buffer.allocUnsafeSlow(size)