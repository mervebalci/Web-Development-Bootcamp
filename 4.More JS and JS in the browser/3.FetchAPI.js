// 1. Introduction to the Fetch API
// The Fetch API offers the ability to make network requests using JavaScript.
url = `https://api.github.com/users/flaviocopes`
fetch(url)
fetch('https://api.github.com/users/flaviocopes')
// The above code is going to make an HTTP request to get the `https://api.github.com/users/flaviocopes` resource.
// The `fetch()` invokation returns a promise, that once resolved resolves to a Response object:
// When you run the code, promise will be returned by fetch()
// To see the JSON content returned by the response we have to call its json() method, which in turns returns a promise:
const url = `https://api.github.com/users/flaviocopes`
const response = await fetch(url)
const data = await response.json()
console.log(data)


// If we write the above code with immediately invoked function:
/* immediately invoked function
(() => {
  
})()
*/
;(async () => {
  const response = await fetch('https://api.github.com/users/flaviocopes')
  const data = await response.json()
  console.log(data)
})()


// In case for any error, we can use TRY-CATCH:
// Let's try ROGER protocol which is not supported by fetch
(async () => {
  try {
    const response = await fetch('ROGER://api.github.com/users/flaviocopes')
    const data = await response.json()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
})()



// 2. The Response object
// The Response Object returned by a `fetch()` call contains all the information about the request and the response of the network request.
fetch('https://api.github.com/users/flaviocopes').then(response => {
  console.log(response)     // returns response object
})


// Accessing the headers property on the response object gives you the ability to look into the HTTP headers returned by the request:
;(async () => {
    const url = `https://api.github.com/users/flaviocopes`
    const response = await fetch(url)

    //print a specific header value to the console
    console.log(response.headers.get('Content-Type'))

    //print all header values to the console
    for (const [key, value] of response.headers.entries()) {
    console.log(`${key}: ${value}`);
    }
})()


// The status property is an integer number representing the HTTP response status.
;(async () => {
    const response = await fetch('https://api.github.com/users/flaviocopes')
    console.log(response.status)
    console.log(response.url)

    console.log(response.headers.get('Date'))

    response.headers.forEach( (key, value) => console.log(`${value}: ${key}`))
})()



// 3. Getting the body content
// A response has a body, accessible using the text() or json() methods. Both return a promise:
;(async () => {
    const response = await fetch('https://api.github.com/users/flaviocopes')
    const body = await response.json()
    // OR const body = await response.text()
    console.log(body)
    const jsondata = JSON.parse(body)
    console.log(jsondata)
})()



// 4. Setting the request headers
// Being able to set the HTTP request header is essential, and fetch gives us the ability to do this by passing an options object with the headers property:
;(async () => {
    const response = await fetch('https://api.github.com/users/flaviocopes', {
      // passing an object as a second parameter to fetch
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
})()


// OR
;(async () => {
    const options = {
        headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
        const url = `https://api.github.com/users/flaviocopes`
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.error("Request failed", err)
    }
})()



// 5. POST Request
// Fetch also allows to use any other HTTP method in your request: POST, PUT, DELETE or OPTIONS.
// Specify the method in the method property of the request, and pass additional parameters in the header and in the request body:
const options = {
  method: "post",
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
  body: "color=green&test=1",
}
  
try {
  fetch(url, options)
} catch (err) {
  console.error("Request failed", err)
}


// To send data as JSON, use application/json as the content-type and JSON-stringify the data in the body:
const dataa = [1, 2, 3]

const option = {
  method: "post",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify(dataa),
}

