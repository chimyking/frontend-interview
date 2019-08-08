/**
 Buffer.from(array) 返回一个新的 Buffer， 其中包含提供的八位字节数组的副本。
 Buffer.from(arrayBuffer[, byteOffset[, length]]) 返回一个新的 Buffer， 它与给定的 ArrayBuffer 共享相同的已分配内存。
 Buffer.from(buffer) 返回一个新的 Buffer， 其中包含给定 Buffer 的内容的副本。
 Buffer.from(string[, encoding]) 返回一个新的 Buffer， 其中包含提供的字符串的副本。
 */


// 1.Buffer.from(array<integer[]>)   返回一个新的 Buffer， 其中包含提供的八位字节数组的副本。
// 十进制
let buffer1 = Buffer.from([1, 2, 3, 4])
console.log(buffer1) // <Buffer 01 02 03 04>
// 十六进制
let buffer2 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
console.log(buffer2) // <Buffer 62 75 66 66 65 72>

// 8进制
let buffer3 = Buffer.from([0o62, 0o75, 0o66, 0x66, 0x65, 0x72])
console.log(buffer3) // <Buffer 32 3d 36 66 65 72>

// 2进制
let buffer4 = Buffer.from([0b0001, 0b0010, 0b0011, 0b0100])
console.log(buffer4) // <Buffer 01 02 03 04>
//================================================================

// 2.Buffer.from(arrayBuffer:<ArrayBuffer> | <SharedArrayBuffer> [, byteOffset[, length]])
// arrayBuffer <ArrayBuffer> | <SharedArrayBuffer> ArrayBuffer 或 SharedArrayBuffer， 或 TypedArray 的.buffer 属性。
// byteOffset <integer> 开始拷贝的索引。 默认值: 0。
// length <integer> 拷贝的字节数。 默认值: arrayBuffer.length - byteOffset。
// todo  待完善
//================================================================
// 3.Buffer.from(buffer)
let buffer5 = Buffer.from(buffer1)
console.log(buffer5) // <Buffer 01 02 03 04>

//=========================4.Buffer.from(string[, encoding])=======================================
// 默认值: 'utf8'。
const buffer6 = Buffer.from('this is a tést');
const buffer7 = Buffer.from('7468697320697320612074c3a97374', 'hex');

console.log('buffer61:', buffer6); // <Buffer 74 68 69 73 20 69 73 20 61 20 74 c3 a9 73 74>
console.log('buffer62:',buffer6.toString()); // this is a tést
console.log('buffer63:', buffer6.toString('ascii')); // this is a tC)st
console.log('buffer64:', buffer6.toString('utf8')); // this is a tC)st
console.log('buffer65:', buffer6.toString('utf16le')); // 桴獩椠⁳⁡썴玩
console.log('buffer66:', buffer6.toString('ucs2')); // 桴獩椠⁳⁡썴玩
console.log('buffer67:', buffer6.toString('base64')); // dGhpcyBpcyBhIHTDqXN0
console.log('buffer68:', buffer6.toString('latin1')); // this is a tÃ©st
console.log('buffer69:', buffer6.toString('binary')); // this is a tÃ©st
console.log('buffer6:', buffer6.toString('hex')); // 7468697320697320612074c3a97374

console.log('buffer7:', buffer7); // <Buffer 74 68 69 73 20 69 73 20 61 20 74 c3 a9 73 74>
console.log('buffer7:', buffer7.toString()); //  this is a tést




//=========================5.Buffer.from(object[, offsetOrEncoding[, length]])=======================================
// object <Object> 支持 Symbol.toPrimitive 或 valueOf() 的对象。
// offsetOrEncoding <number> | <string> 字节偏移量或字符编码， 取决于 object.valueOf() 或 object[Symbol.toPrimitive]() 返回的值。
// length <number> 长度， 取决于 object.valueOf() 或 object[Symbol.toPrimitive]() 的返回值。

