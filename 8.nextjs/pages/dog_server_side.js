/*
If you need a page to get data from a database or the network, 
you’ll need to add a function to your page components called `getServerSideProps`.

This is a Next.js feature.
This function has the task of fetching data and returning it as an object with the `props` property.
It’s important to note that this function runs on the server 
(which will be Vercel, or another hosting provider that can run Next.js apps).

When a page component has this function associated, whenever a user visits the URL, the page is rendered from the server.
The server must do some work before the page is fully served, 
so the page will load slower than static pages that don’t have this function, where there is no data processing involved at all.

Note that Next.js will first render a page without the data.
When the data becomes available, it will add the data to the page. 
This gives you the option to send the user a skeleton of the page quickly, 
but then the user will see a “loading..” screen until the data is ready.

Sometimes server-side data fetching is the only way to provide useful information, when a database is involved.

For example let’s do a  fetch() API call server-side to get something from the network in getServerSideProps:
Then we can use this data in the component:

This is SERVER-SIDE data fetching.
*/


export default function DogImage({ image }) {
    return (
        <img src={image} />
    )
}
  
export async function getServerSideProps() {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    const data = await res.json()
    return {
        props: { 
                image: data.message 
        }
    }
}