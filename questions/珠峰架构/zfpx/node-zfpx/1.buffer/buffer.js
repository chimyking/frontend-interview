// 创建buffer
/**
 Buffer.from(array) 返回一个新的 Buffer， 其中包含提供的八位字节数组的副本。
 Buffer.from(arrayBuffer[, byteOffset[, length]]) 返回一个新的 Buffer， 它与给定的 ArrayBuffer 共享相同的已分配内存。
 Buffer.from(buffer) 返回一个新的 Buffer， 其中包含给定 Buffer 的内容的副本。
 Buffer.from(string[, encoding]) 返回一个新的 Buffer， 其中包含提供的字符串的副本。
 Buffer.alloc(size[, fill[, encoding]]) 返回一个指定大小的新建的的已初始化的 Buffer。 此方法比 Buffer.allocUnsafe(size) 慢， 但能确保新创建的 Buffer 实例永远不会包含可能敏感的旧数据。
 Buffer.allocUnsafe(size) 和 Buffer.allocUnsafeSlow(size) 分别返回一个指定大小的新建的未初始化的 Buffer。 由于 Buffer 是未初始化的， 因此分配的内存片段可能包含敏感的旧数据。
 Buffer.allocUnsafeSlow() 返回的实例则从不使用共享的内部内存池。
 Buffer.byteLength(string[, encoding])
 Buffer.compare(buf1, buf2)
 Buffer.concat(list[, totalLength])
 Buffer.isBuffer(obj)
 Buffer.isEncoding(encoding)
 Buffer.poolSize
 */


/**
 * 
 * 
 * 实例方法

buf[index]
buf.buffer
buf.byteOffset


buf.values()
buf.entries()
buf.keys()

buf.equals(otherBuffer)
buf.fill(value[, offset[, end]][, encoding])
buf.includes(value[, byteOffset][, encoding])
buf.indexOf(value[, byteOffset][, encoding])

buf.lastIndexOf(value[, byteOffset][, encoding])
buf.length

buf.readDoubleBE(offset)#
buf.readDoubleLE(offset)
buf.readFloatBE(offset)#
buf.readFloatLE(offset)
buf.readInt8(offset)
buf.readInt16BE(offset)#
buf.readInt16LE(offset)
buf.readInt32BE(offset)#
buf.readInt32LE(offset)
buf.readIntBE(offset, byteLength)#
buf.readIntLE(offset, byteLength)
buf.readUInt8(offset)
buf.readUInt16BE(offset)#
buf.readUInt16LE(offset)
buf.readUInt32BE(offset)#
buf.readUInt32LE(offset)
buf.readUIntBE(offset, byteLength)#
buf.readUIntLE(offset, byteLength)
buf.slice([start[, end]])
buf.swap16()
buf.swap32()
buf.swap64()
buf.toJSON()
buf.toString([encoding[, start[, end]]])


buf.write(string[, offset[, length]][, encoding])
buf.writeDoubleBE(value, offset)#
buf.writeDoubleLE(value, offset)
buf.writeFloatBE(value, offset)#
buf.writeFloatLE(value, offset)
buf.writeInt8(value, offset)
buf.writeInt16BE(value, offset)#
buf.writeInt16LE(value, offset)
buf.writeInt32BE(value, offset)#
buf.writeInt32LE(value, offset)
buf.writeIntBE(value, offset, byteLength)#
buf.writeIntLE(value, offset, byteLength)
buf.writeUInt8(value, offset)
buf.writeUInt16BE(value, offset)#
buf.writeUInt16LE(value, offset)
buf.writeUInt32BE(value, offset)#
buf.writeUInt32LE(value, offset)
buf.writeUIntBE(value, offset, byteLength)#
buf.writeUIntLE(value, offset, byteLength)

buffer.INSPECT_MAX_BYTES
buffer.kMaxLength
buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])
buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
buffer.transcode(source, fromEnc, toEnc)
 */

/**
 * Buffer 常量
 * buffer.constants.MAX_LENGTH
 * buffer.constants.MAX_STRING_LENGTH
 */

// 实例api