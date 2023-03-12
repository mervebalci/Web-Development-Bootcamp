// Let's try if code will be executed:
// console.log('test')

/*
Now that JavaScript is running outside of the browser, it can do many more things, 
because we’re running it outside of the browser sandbox, 
a security tool that prevents your computer to be hacked all the time just by visiting random websites.

JavaScript in the browser is limited. 
But outside of it, it can access the network, the filesystem, the database, configuration options, and a lot more.
*/


// Using this new way, instead of using 'require' we’ll use 'IMPORT':
import { sum } from './lib.js'
console.log(sum(13, 19))


// Calling the lib.js with REQUIRE function:
// const { sum } = require('./lib.js')
// console.log(sum(13, 19))

// This is the Node.js require syntax, also called CommonJS.
// It’s been the way to import files and modules in Node.js for years.

// Lately, there’s been a new way which is ES Modules.
// Using this new way, instead of using require we’ll use import:
// import { sum } from './lib.js'


/*
This error is showed in the terminal while importing a function from a JavaScript file.
SyntaxError: cannot use import statement outside a module

This error occurs for one reason: you’re trying to use import and you’re not inside an ES module.
It can happen in a Node.js environment, or in the browser.

First, we need to tell Node.js that this is a module.
So, add package.json file in the folder of the project and add this below code:
{
    "type": "module"
}

Things are now working because we told Node.js that this is a module and should use ES modules syntax.


In the browser instead, you have to add the type attribute with the value module when you load the script:
<script type="module" src="./file.js"></script>
*/



// Importing express package to express value:
import express from 'express'

const app = express()   // instantiate an application by calling express() method

/* Once we have the application object, we tell it to listen 
    for GET requests on the / path, using the get() method. */
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Server ready!'))


/*
Node.js program did not return control to the terminal after it launched. 
This is because calling app.listen() creates a long-running program that keeps listening 
until you terminate the program manually using ctrl c in the terminal.
Or until there is a fatal error that forces the program to quit.

If you open URL http://localhost:3000 you'll see 'Hello World!' on the page.
If you type ctrl c in the terminal, 'Hello World!' page will be terminated 
and you'll see that browser can't connect to the server.
*/

/*
There is a method for every HTTP verb: get(), post(), put(), delete(), patch():
    app.get('/', (req, res) => { ... })
    app.post('/', (req, res) => { ... })
    app.put('/', (req, res) => { ... })
    app.delete('/', (req, res) => { ... })
    app.patch('/', (req, res) => { ... })
Those methods accept a callback function - which is called when a request is started - and we need to handle it.
*/

// We pass in an arrow function:
// (req, res) => res.send('Hello World!')

/*
Express sends us two objects in this callback, 
which we called `req` and `res`, they represent the `Request` and the `Response` objects.

`Request` is the HTTP request. It gives us all the request information, 
including the request parameters, the headers, the body of the request, and more.

`Response` is the HTTP response object that we'll send to the client.

What we do in this callback is to send the 'Hello World!' string to the client, 
using the `Response.send()` method.
This method sets that string as the body, and it closes the connection.

The last line of the example actually starts the server 
and tells it to listen on port `3000`. We pass in a callback that is called 
when the server is ready to accept new requests.
*/


/* 
We can use Express to implement the REST API with 2 `GET` endpoints:
    - `/people`
    - `/person/<id>`
*/

// import express from 'express'
// const app = express()

// Now we add an array that hosts a list of objects representing people.
// Each person has an id, so we can request it later, and a name:
const people = [
    { id: 1, name: 'Billy' },
    { id: 2, name: 'Bob' }
]

// app.get('/', (req, res) => res.send('Hello World!))

// We’ll pass it the people array,
// but first we need to transform it to JSON using the JSON.stringify() method.
app.get('/people', (req, res) => {
    res.json(people)
})

// To get the value of the id from the URL:
app.get('/person/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const person = people.find(person => person.id === id)
    // Getting the requested person from the people array using the array’s find() method

    // if the person is found in the array return it, 
    // otherwise, return a 404 error code which means “not found”:
    if (person) {
        res.json(person)
        return
    }

    res.sendStatus(404)
})

// app.listen(3000, () => console.log('Server ready!))

