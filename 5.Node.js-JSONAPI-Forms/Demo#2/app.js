// Creating a form in express
import express from 'express'
const app = express()

// Need to tell Express that the data will be URL encoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    const page = `
        <html>
            <body>
                <h1>Enter a new person:</h1>
                <form action="/person" method="POST">
                    <input type="text" name="name" />
                    <input type="submit"/>
                </form>
            </body>
            
        </html>
    `
    res.send(page)
})

app.post('/person', (req, res) => {
    console.log('Received a new person data!')

    const name = req.body.name
    console.log(name)
})

app.listen(3000, () => console.log('Server ready!'))