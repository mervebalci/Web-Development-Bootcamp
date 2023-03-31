/*
Depending on what you’re trying to do, sometimes you might want to load this data from the browser, client-side. 

We do so by avoiding the use of getServerSideProps and by instead using the React hook useEffect(),
which is executed client-side when the component is loaded:
*/

import { useState, useEffect } from 'react'

export default function DogImage() {
  const [image, setImage] = useState(null)

  useEffect(() => {
    async function getData() {
	  const res = await fetch(
        `https://dog.ceo/api/breeds/image/random`)
	  const data = await res.json()
	  setImage(data.message)
	}
    getData()
  }, [])

  return (
    <img src={image} />
  )
}