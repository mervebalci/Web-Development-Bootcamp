// ASYNCHRONOUS PROGRAMMING - CALLBACK FUNCTIONS

// 1. querySelector() and addEventListener() functions
document.querySelector('#test').addEventListener('click', () => {
  //this function is executed when the mouse is clicked
})


// 2. TIMERS - setTimeout() and setInterval() functions
// setTimeout() runs only 1 time
const timer = setTimeout(() => {
  console.log('Hello!')
}, 3000)  // responds after 5000 milliseconds

// clearTimeout(timer)    to delete this scheduled function execution

// setInterval() runs forever
const interval = setInterval(() => {
  console.log('Hey there!')
}, 5000)

setTimeout(() => {
  clearInterval(interval)    // to stop the print out
}, 19000)


// 3. PROMISES
let done = true  // or false

const isFinished = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})

// You create a promise using the `new Promise()` syntax, which accepts a function. That function gets two parameters, `resolve` and `reject`:
// new Promise((resolve, reject) => {})

// How to use that promise:
isFinished.then((msg) => {
  console.log(msg)
}).catch((err) => {
  console.error(err)
})


// 4. ASYNC FUNCTIONS
/*
Async functions are a higher level abstraction over promises.
They are **built on promises**, so they don't replace them, but they expand what promises can do in a really powerful way.
Async functions help us reduce the boilerplate around promises. They make it so much easier to use them in a more straightforward way.
*/
const doSomething = async () => {
  let msg = await isFinished
  console.log(msg)
}
doSomething()

// You can also write the code as below as using immediately invoked functions - DON'T FORGET TO PUT SEMICOLON BEFORE IMM. INVOKED FUNCS:
;(async () => {
  try {
    let msg = await isFinished
    console.log(msg) 
  } catch (err) {
    console.log(err)
  }
})()