


let encodings = [
    'utf8',
    'utf16',
    'utf32',
    'ucs2',
    'ucs4',
    'big5',
    'Big5',
    'gb2312',
    'GBK',
    'GB18030',
    'Euc-kr',
    'Shift_JIS',
    'GB18030-2000',
    'ascii',
    'utf16le',
    'base64',
    'latin1',
    'binary',
    'hex',
]

encodings.forEach(item=>{
    console.log(item, Buffer.isEncoding(item))
})

let obj = new ArrayBuffer(8)
console.log(Buffer.isBuffer(obj)) // false