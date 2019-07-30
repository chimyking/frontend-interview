 // 1.Buffer.alloc(size[, fill[, encoding]])

 let buffer1 = Buffer.alloc(20)
 console.log('buffer1:', buffer1) // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>

 let buffer2 = Buffer.alloc(20, 2)
 console.log('buffer2:', buffer2) // <Buffer 02 02 02 02 02 02 02 02 02 02 02 02 02 02 02 02 02 02 02 02>

 // encoding
 /**
 'ascii' - 仅适用于 7 位 ASCII 数据。 此编码速度很快， 如果设置则会剥离高位。   （0-255）
 'utf8' - 多字节编码的 Unicode 字符。 许多网页和其他文档格式都使用 UTF-8。
 'utf16le' - 2 或 4 个字节， 小端序编码的 Unicode 字符。 支持代理对（ U + 10000 至 U + 10 FFFF）。
 'ucs2' - 'utf16le'的别名。
 'base64' - Base64 编码。 当从字符串创建 Buffer 时， 此编码也会正确地接受 RFC4648 第 5 节中指定的“ URL 和文件名安全字母”。
 'latin1' - 一种将 Buffer 编码成单字节编码字符串的方法（ 由 RFC1345 中的 IANA 定义， 第 63 页， 作为 Latin - 1 的补充块和 C0 / C1 控制码）。
 'binary' - 'latin1'的别名。
 'hex' - 将每个字节编码成两个十六进制的字符。
  */

 // ascii [0,255]
 // case 1 范围内
 let buffer3 = Buffer.alloc(20, 255, 'ascii')
 console.log('buffer3:', buffer3) // <Buffer ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff ff>
 // case 2 范围以外
 // 数字
 let buffer4 = Buffer.alloc(20, 256, 'ascii')
 console.log('buffer4:', buffer4) // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
 let buffer5 = Buffer.alloc(20, 257, 'ascii')
 console.log('buffer5:', buffer5) // <Buffer 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01>
 let buffer6 = Buffer.alloc(20, -1, 'ascii')
 console.log('buffer6:', buffer6) // <Buffer 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01>
 let buffer7 = Buffer.alloc(20, -2, 'ascii')
 console.log('buffer7:', buffer7) //  <Buffer fe fe fe fe fe fe fe fe fe fe fe fe fe fe fe fe fe fe fe fe>
 let buffer8 = Buffer.alloc(20, 512, 'ascii')
 console.log('buffer7:', buffer8) //  <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
 let buffer9 = Buffer.alloc(20, -256, 'ascii')
 console.log('buffer7:', buffer9) //  <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>

 // ascii 内的字符
 let buffer10 = Buffer.alloc(20, 68, 'ascii')
 console.log('buffer10:', buffer10) //  <Buffer 44 44 44 44 44 44 44 44 44 44 44 44 44 44 44 44 44 44 44 44>
 let buffer11 = Buffer.alloc(20, 'D', 'ascii')
 console.log('buffer11:', buffer11) //  <Buffer 44 44 44 44 44 44 44 44 44 44 44 44 44 44 44 44 44 44 44 44>

 // ascii 内的字符组合
 let buffer12 = Buffer.alloc(20, 'CD', 'ascii')
 console.log('buffer12:', buffer12) //  <Buffer 43 44 43 44 43 44 43 44 43 44 43 44 43 44 43 44 43 44 43 44>

 // ascii外字符
 let buffer13 = Buffer.alloc(20, '王', 'ascii') // GB2312编码：CDF5 BIG5编码：A4FD GBK编码：CDF5 GB18030编码：CDF5 Unicode编码：738B
 console.log('buffer13:', buffer13) //  <Buffer 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b>
 let buffer14 = Buffer.alloc(20, '成', 'ascii') // GB2312编码：B3C9 BIG5编码：A6A8 GBK编码：B3C9 GB18030编码：B3C9  Unicode编码：6210
 console.log('buffer14:', buffer14) //  <Buffer 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10>
 let buffer15 = Buffer.alloc(20, '王成', 'ascii') // GB2312编码：B3C9 BIG5编码：A6A8 GBK编码：B3C9 GB18030编码：B3C9  Unicode编码：6210
 console.log('buffer15:', buffer15) //  <Buffer 8b 10 8b 10 8b 10 8b 10 8b 10 8b 10 8b 10 8b 10 8b 10 8b 10>

 // utf8  一个字节到4个字节不等 （外部文章：怎么把中文转换成16进制）
 let buffer16 = Buffer.alloc(20, '王', 'utf8') // GB2312编码：B3C9 BIG5编码：A6A8 GBK编码：B3C9 GB18030编码：B3C9  Unicode编码：6210
 console.log('buffer16:', buffer16) //  <Buffer e7 8e 8b e7 8e 8b e7 8e 8b e7 8e 8b e7 8e 8b e7 8e 8b e7 8e>

 let buffer17 = Buffer.alloc(20, 'CD', 'utf8') //
 console.log('buffer17:', buffer17) //  <Buffer 43 44 43 44 43 44 43 44 43 44 43 44 43 44 43 44 43 44 43 44>

// utf16le/ucs2
 let buffer18 = Buffer.alloc(20, '王', 'utf16le') // GB2312编码：B3C9 BIG5编码：A6A8 GBK编码：B3C9 GB18030编码：B3C9  Unicode编码：6210
 console.log('buffer18:', buffer18) //  <Buffer 8b 73 8b 73 8b 73 8b 73 8b 73 8b 73 8b 73 8b 73 8b 73 8b 73>

 let buffer19 = Buffer.alloc(20, 'CD', 'ucs2') //
 console.log('buffer19:', buffer19) //  <Buffer 43 00 44 00 43 00 44 00 43 00 44 00 43 00 44 00 43 00 44 00>

// base64
 let buffer20 = Buffer.alloc(20, 2, 'base64') 
 console.log('buffer20:', buffer18) //  <Buffer 8b 73 8b 73 8b 73 8b 73 8b 73 8b 73 8b 73 8b 73 8b 73 8b 73>

 let buffer21 = Buffer.alloc(20, 'CD', 'base64') //
 console.log('buffer21:', buffer21) //  <Buffer 08 08 08 08 08 08 08 08 08 08 08 08 08 08 08 08 08 08 08 08>

// latin1 /binary
 let buffer22 = Buffer.alloc(20, '王', 'latin1')
 console.log('buffer22:', buffer22) //  <Buffer 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b>

 let buffer23 = Buffer.alloc(20, 'CD', 'latin1') //
 console.log('buffer23:', buffer23) //  <Buffer 43 44 43 44 43 44 43 44 43 44 43 44 43 44 43 44 43 44 43 44>

// hex
 let buffer24 = Buffer.alloc(20, 'ad', 'hex')
 console.log('buffer24:', buffer24) //  <Buffer 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b 8b>

 let buffer25 = Buffer.alloc(20, 'CD', 'hex') //
 console.log('buffer25:', buffer25) //  <Buffer 43 44 43 44 43 44 43 44 43 44 43 44 43 44 43 44 43 44 43 44>


















