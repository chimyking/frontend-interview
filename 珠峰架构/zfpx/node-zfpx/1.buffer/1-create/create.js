/**
 Buffer.from(array) 返回一个新的 Buffer， 其中包含提供的八位字节数组的副本。
 Buffer.from(arrayBuffer[, byteOffset[, length]]) 返回一个新的 Buffer， 它与给定的 ArrayBuffer 共享相同的已分配内存。
 Buffer.from(buffer) 返回一个新的 Buffer， 其中包含给定 Buffer 的内容的副本。
 Buffer.from(string[, encoding]) 返回一个新的 Buffer， 其中包含提供的字符串的副本。
 Buffer.from(object[, offsetOrEncoding[, length]])
 Buffer.alloc(size[, fill[, encoding]]) 返回一个指定大小的新建的的已初始化的 Buffer。 此方法比 Buffer.allocUnsafe(size) 慢， 但能确保新创建的 Buffer 实例永远不会包含可能敏感的旧数据。
 Buffer.allocUnsafe(size) 和 Buffer.allocUnsafeSlow(size) 分别返回一个指定大小的新建的未初始化的 Buffer。 由于 Buffer 是未初始化的， 因此分配的内存片段可能包含敏感的旧数据。
 Buffer.allocUnsafeSlow() 返回的实例则从不使用共享的内部内存池。
 */

 // 1.Buffer.alloc(size[, fill[, encoding]])
 // 2.Buffer.allocUnsafe(size)
 // 3.Buffer.allocUnsafeSlow()
 // 4.Buffer.from()
 // 4-1.Buffer.from(array)
 // 4-2.Buffer.from(arrayBuffer[, byteOffset[, length]])
 // 4-3.Buffer.from(buffer)
 // 4-4.Buffer.from(string[, encoding])