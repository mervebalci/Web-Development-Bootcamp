// TypeScript is a superset of JavaScript, which means valid JavaScript is also valid TypeScript.
// JavaScript has some basic types, like string, number, object, date, and more.
// However there’s no type checking.

// For example you can have a `multiply` function in JavaScript:
const multiply = (a, b) => {
    return a * b
}

// TypeScript lets you enforce a and b to be numbers, and also the function will return a number:
const multiply = (a: number, b: number): number => {
    return a * b
}

// This prevents errors happen, if you try to pass a string or date to the function. 
// The compiler can detect those errors ahead of time, and tell you.
