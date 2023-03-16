// Creating a form in express
import express from 'express'
const app = express()

// Need to tell Express that the data will be URL encoded
app.use(express.urlencoded({ extended: true }))

// Want to have a list of people displayed in the page,
// and when form is submitted, they'll be updated.
// First, add a list of people in a 'people' array.
const people = [
    { name: 'Efes' },
    { name: 'Boncuk' }
]

// Then, list those people when the homepage HTML is generated.
app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Enter a new person:</h1>
                <form action="/person" method="POST">
                    <input type="text" name="name" />
                    <input type="submit"/>
                </form>
                <h2>List of people:</h2>
                <ul>
                    ${people.map(person => `<li>${person.name}</li>`).join('')}
                </ul>
            </body>
        </html>
    `)
})
// With ${} syntax, we embed a string using JavaScript in HTML
// array.map() is to iterate over all the people array items
// .join('') method is to generate a string, otherwise .map() returns an array


// In the POST /person endpoint request listener, we add a new item to the people array
// and we redirect the user back to the / URL, so we'll see the list of updated people as a result
app.post('/person', (req, res) => {
    const name = req.body.name
    people.push({ name: name })
    res.redirect('/')
})

app.listen(3000, () => console.log('Server ready!'))