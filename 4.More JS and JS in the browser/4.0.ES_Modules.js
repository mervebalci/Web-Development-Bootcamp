/*
ES modules are the way we work with JavaScript code that's organized across multiple files.

Modules are very cool because they let you encapsulate all sorts of functionality, 
and expose this functionality to other JavaScript files, as libraries.

The syntax to import a module is:
import package from 'modulename'
A module is a JavaScript file that exports one or more values (it can be objects, functions or variables), using the export keyword.
*/

// uppercase.mjs file exports a function that when passed a string, it returns that string uppercased:
function toUpperCase(str) {
    str.toUpperCase()
}
  
export default toUpperCase 
// In this example, the module defines a single default export.

// It can be imported by another file in the same directory, using this syntax:
import toUpperCase from './uppercase.mjs'


// You can also export multiple things from a module by using this syntax, and we call that syntax named exports:
const a = 1
const b = 2
const c = 3

export { a, b, c }

// And in this case, you'd import those different items listing their names by using curly brackets:
import { a, b, c } from 'modulename'

// In this case of course you can choose to only import one or two:
import { a } from 'modulename'
import { b, c } from 'modulename'

