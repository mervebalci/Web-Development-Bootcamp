/*
Previously, we linked the home page to the blog page.
A blog is a great use case for Next.js, one we'll continue to explore by adding blog posts.

Blog posts have a dynamic URL. 
For example a post titled "Hello World" might have the URL `/blog/hello-world`. 
A post titled "My second post" might have the URL `/blog/my-second-post`.
This content is dynamic, and might be taken from a database, markdown files or more.

Next.js can serve dynamic content based on a dynamic URL.
We create a dynamic URL by creating a dynamic page with the `[]` syntax.

Add a `pages/blog` folder, and inside it, add a file named `[id].js`.
This file will handle all the dynamic URLs under the `/blog/` route,
like above: `/blog/hello-world`, `/blog/my-second-post` and more.

In the file name, `[id]` inside the square brackets means that 
anything that's dynamic will be put inside the `id` parameter of the query property of the router.

The router is a library provided by Next.js.
And we import it from `next/router`:

Once we have useRouter, we instantiate the router object: const router = useRouter()
*/


/*
Once we have this router object, we can extract information from it.
In particular we can get the dynamic part of the URL in the `[id].js` file by accessing `router.query.id`.
The dynamic part can also just be a portion of the URL, like post-[id].js.
*/


/*
Data fetching when a user visits a page, both in the backend and in the frontend.
Next.js also offers another way. It’s called static data fetching.

Suppose you have a blog. You have a set of blog posts, perhaps published on a service like Contentful or Sanity. 
Or on a headless Wordpress install.
You can tell Next.js to fetch that content at build time, 
and generate static pages that are then served to the user without further action.
It’s the best of both worlds: your data is dynamic in nature, but you create static pages from it.

How does it work?
You have to define and export 2 functions in your page component:
    - `getStaticPaths`
    - `getStaticProps`

The first defines the dynamic URLs that the page allows.

Object.keys() is a way to convert an object's properties to an array, 
so then you can iterate over it using map().

Now the page component receives the post parameter as its prop, 
and it does not need to load a router and do any kind of client-side data lookup, 
because Next.js does this at build time:
*/

import posts from 'posts.json'

export default function BlogPost({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(posts).map((id) => ({ params: { id } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: posts[params.id],
    },
  }
}