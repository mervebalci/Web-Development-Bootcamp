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