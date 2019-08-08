// https: //juejin.im/post/5b97d2b55188255c781ca228
let promiseGlobal = new Promise(resolve => {
  console.log(1)
  resolve('2')
})
console.log(3)

promiseGlobal.then(data => {
  console.log(data)
  let setTimeoutInner = setTimeout(_ => {
    console.log(4)
  }, 1000)
  let promiseInner = new Promise(resolve => {
    console.log(5)
    resolve(6)
  }).then(data => {
    console.log(data)
  }).then(res => {
    console.log(11)
  })
}).then(res => {
  console.log(10)
})

let setTimeoutGlobal = setTimeout(_ => {
  console.log(7);
  let promiseInGlobalTimeout = new Promise(resolve => {
    console.log(8);
    resolve(9)
  }).then(data => {
    console.log(data)
  })
}, 1000)

// 1
// 3

// 2
// 5
// 6

// 10
// 11
// 7
// 8
// 9
// 4