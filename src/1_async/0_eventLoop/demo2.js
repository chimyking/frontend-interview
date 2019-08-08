// https: //juejin.im/post/5b6d58fee51d45194b195544
setTimeout(function () {
  console.log(1)
}, 0)
new Promise(function executor(resolve) {
  console.log(2)
  for (var j = 0; j < 100; j++) {
    j = 99 && resolve()
  }
  console.log(3)
}).then(function () {
  console.log(4)
})
console.log(5)


// 2
// 3
// 5
// 4
// undefined
// 1