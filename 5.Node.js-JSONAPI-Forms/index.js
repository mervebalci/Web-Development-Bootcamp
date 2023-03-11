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




// Using RENAME method of 'fs' built-in module:
import fs from 'fs'

fs.rename('file.txt', 'newfilename.txt', (err) => {
    if (err) {
        // there's been an error of renaming!
        console.log(err)
        return
    }
    // the file has been renamed!
})

/*
This would be impossible inside the browser. 
JavaScript has no access to files on the computer, otherwise, it’d be a security risk. 
But Node.js programs can access the filesystem.
It’s not like the program runs automatically when you visit a random website.
*/