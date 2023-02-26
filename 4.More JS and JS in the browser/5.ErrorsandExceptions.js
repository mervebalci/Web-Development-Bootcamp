/*  ## ERRORS
There are 7 error objects:
        - Error
        - EvalError
        - RangeError
        - ReferenceError
        - SyntaxError
        - TypeError
        - URIError


    ** Error
This is the generic error, and it's the one all the other error objects inherit from.
You will never see an instance of `Error` directly, but rather JavaScript fires one of the other errors listed above, which inherit from `Error`.

It contains 2 properties:

- `message`: the error description, a human readable message that should explain what error happened
- `name`: the type of error that occurred (assumes the value of the specific error object name, for example, `TypeError` or `SyntaxError`)

and provides just one method, `toString()`, which is responsible for generating a meaningful string from the error, which can be used to print it to the screen.


    ** RangeError
A RangeError will fire when a numeric value is not in its range of allowed values.


    ** ReferenceError
A ReferenceError indicates that an invalid reference value has been detected: a JavaScript program is trying to read a variable that does not exist. */
dog         //ReferenceError: dog is not defined
dog = 2     //ReferenceError: dog is not defined


//  ** SyntaxError
// A SyntaxError is raised when a syntax error is found in a program.
// A function statement without a name:
function() {
    return 'Hi!'
}     //SyntaxError: function statement requires a name

// Missing comma after an object property definition:
const dog = {
    name: 'Roger'
    age: 5
}     //SyntaxError: missing } after property list


//  ** TypeError
// A TypeError happens when a value has a type that's different than the one expected.
1234()   //TypeError: 1234 is not a function


//  ** URIError
/* This error is raised when calling one of the global functions that work with URIs:
        - `decodeURI()`
        - `decodeURIComponent()`
        - `encodeURI()`
        - `encodeURIComponent()`
and passing an invalid URI. */



/*  ## CREATING EXCEPTIONS
When the code runs into an unexpected problem, the way to handle this situation is through EXCEPTIONS.

An exception is created using the `throw` keyword:
    throw value
where `value` can be any JavaScript value including a string, a number, or an object.

As soon as JavaScript executes this line, the normal program flow is halted and the control is held back to the nearest **exception handler**.
*/
const test = (parameter) => {
  if (typeof parameter !== 'number') {
    throw 'The parameter should be a number!'
  }
}
  
test('test')



/*  ## HANDLING EXCEPTIONS
An exception handler is a `try`/`catch` statement.

Any exception created in the lines of code included in the `try` block can be handled in the corresponding `catch` block: */
try {
    //lines of code
} catch (e) {
  
}
// catch() accepts a variable, e in this example, that contains the exception value.