/*
In addition to creating page routes, which means pages are served to the browser as Web pages, Next.js can create API routes.
This is a very interesting feature because it means that Next.js can be used to create a frontend for data that is stored 
and retrieved by Next.js itself, transferring JSON via fetch requests.

API routes live under the /pages/api/ folder and are mapped to the /api endpoint.
This feature is very useful when creating applications.

Create a /pages/api/comments.js file, whose goal is to return the comments of a blog post as JSON.
Create a comments.json file in the project root. This file will store a list of comments:
*/


// Here's a sample API route, which returns to the client the list of comments:
// It will listen on the /api/comments URL for GET requests, and you can try calling it using your browser:
import comments from 'comments.json'

export default function handler(req, res) {
  res.status(200).json(comments)
}



/*
In dynamic pages, you'd need to import `useRouter` from `next/router`, 
then get the router object using `const router = useRouter()`, 
and then we'd be able to get the `id` value using `router.query.id`.

In the server-side API routes it's easier to do that, as the query is attached to the request object:
    export default function handler(req, res) {
    console.log(req.query.id)
    res.end()
    }

If you do a POST request, all works in the same way: it all goes through that default export.

To separate POST from GET and other HTTP methods (PUT, DELETE), lookup the req.method value:
    export default function handler(req, res) {
      switch (req.method) {
        case 'GET':
          //...handle the GET request here
          break
        case 'POST':
          //...handle the POST request here
          break
        default:
          res.status(405).end() //no other method is allowed, so we return a "405 Method Not Allowed" error
          break
      }
    }

In addition to req.query and req.method we already saw, we can have access to the request body in req.body. 
*/