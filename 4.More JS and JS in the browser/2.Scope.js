// GLOBAL SCOPE
/*
Scope is the set of variables that's visible to a part of the program.

In JavaScript we have a 3 different scopes:
    - global scope
    - function scope
    - block scope

In JavaScript, everything that's not defined inside a function or inside a block (anything wrapped in `{}`, for example a for loop body) is attached to the global object.

For example, let's declare a varable here:
const age = 24
We can always reference this variable inside any other function or loop or anywhere, using 'age'.
*/




// FUNCTION SCOPE
// You typically avoid having too many global variables because they can be prone to errors in your code.
let i = 0

const loop = () => {
  while (i < 10) {
    i++
    console.log('loop number ' + i)
  }
  return i
}
console.log(i)    // i = 0 bcz loop haven't run yet
loop()
console.log(i)    // i = 10 bcz loop run one time already
loop()
// In this example, i is a global variable.
// If you call loop() 2 times, the second time you run loop(), i is not initialized again, and it's already reached the number 10 in the first iteration, so the loop() function immediately returns.


// HOWEVER, in here: The iterations will be running again each time you call loop() because i is initialized at the beginning of the function.
const loop = () => {
  let i = 0

  while (i < 10) {
    i++
    console.log('loop number ' + i)
  }
  return i
}
// console.log(i)    // ReferenceError: i is not defined. Need to run this inside the function. Bcz i is defined inside the function.
loop()
// console.log(i)    // ReferenceError: i is not defined. Need to run this inside the function. Bcz i is defined inside the function.
loop()

// i is now a variable local to the function and has function scope. It is not visible from the outside.




// BLOCK SCOPE {}
// There is a very important scope difference between declaring a variable using var, or declaring it with let or const.
// A block is anything identified by a pair of curly braces.

// LET
count = 12
if (count > 10) {
  let text = "Bigger than 10!"
  console.log(text)
}

console.log(text)    // ReferenceError: text is not defined. 
// Bcz text is out of the block. if you use var instead of let, problem will be solved.


// VAR
count = 12
if (count > 10) {
  var text = "Bigger than 10!"
  console.log(text)
}

console.log(text)