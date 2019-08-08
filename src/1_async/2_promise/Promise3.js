function handlePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('circular reference'));
  }
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    let called;
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return;
          called = true;
          handlePromise(promise2, y, resolve, reject);
        }, r => {
          if (called) return;
          called = true;
          reject(r)
        })
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }

  } else {
    resolve(x);
  }
}
class Promise {
  constructor(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.successStore = [];
    this.failStore = [];
    let resolve = (value) => {
      if (this.status === 'pending') {
        this.value = value;
        this.status = 'resolved';
        this.successStore.forEach(fn => fn());
      }
    }
    let reject = (reason) => {
      if (this.status === 'pending') {
        this.reason = reason;
        this.status = 'rejected';
        this.failStore.forEach(fn => fn());
      }
    }
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : y => y;
    onRejected = typeof onRejected === 'function' ? onRejected : errr => {
      throw err;
    }
    let promise2;
    if (this.status === 'resolved') {
      promise2 = new Promise((resolve, reject) => {
        setTimeout(() => { //异步处理
          try {
            let x = onFulfilled(this.value);
            handlePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      })
    }
    if (this.status === 'rejected') {
      promise2 = new Promise((resolve, reject) => {
        setTimeout(() => { //异步处理
          try {
            let x = onRejected(this.reason);
            handlePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      })
    }
    if (this.status === 'pending') {
      promise2 = new Promise((resolve, reject) => {
        this.successStore.push(() => {
          setTimeout(() => { //异步处理
            try {
              let x = onFulfilled(this.value);
              handlePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        })
        this.failStore.push(() => {
          setTimeout(() => { //异步处理
            try {
              let x = onRejected(this.reason);
              handlePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        })
      })
    }
    return promise2;
  }
}

Promise.all = function (promiseArrs) {
  return new Promise((resolve, reject) => {
    let arr = [];
    let i = 0;

    function processData(index, data) {
      arr[index] = data;
      i++;
      if (i === promiseArrs.length) {
        resolve(arr);
      }
    }
    for (let i = 0; i < promiseArrs.length; i++) {
      promiseArrs[i].then((data) => {
        processData(i, data);
      }, reject)
    }
  })
}

Promise.deferred = Promise.defer = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  })
  return dfd;
}

module.exports = Promise;