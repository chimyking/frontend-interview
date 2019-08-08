let fs = require('fs');
let ReadStream  = require('./readable');
let rs = new ReadStream('./1.txt',{
  highWaterMark:4
});

rs.on('readable',()=>{
  let r = rs.read(4);
  console.log(r);
});