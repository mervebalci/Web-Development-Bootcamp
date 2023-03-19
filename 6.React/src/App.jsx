/*
JSX kind of loooks like HTML. But there are differrences:
  1. class attribute in HTML vs className attribute in JSX
  2. HTML is very relaxed and forgiving. 
    If you have an error in the syntax, or you close the wrong tag, or you have a mismatch, 
    the browser will try its best to interpret the HTML without breaking.
    JSX is not forgiving. If you forget to close a tag, you will have a clear error message.
*/

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function WelcomeMessage({pet, children}) {
  console.log(pet)
  return <h2>{children} {pet.name} age: {pet.age}</h2>
}

function GoodbyeMessage({pet}) {
  return <h2>Goodbye {pet.name}</h2>
}

// function WriteEfes() {
//   return <span>Efes</span>
// }

// function WriteBoncuk() {
//   return <span>Boncuk</span>
// }

function App() {
  const [count, setCount] = useState(0)

  const [name, setName] = useState("")


  const efes = {
    name: "Efes",
    age: 4
  }

  const boncuk = {
    name: "Boncuk",
    age: 10
  }

  const [pet, setPet] = useState(efes)


  const changeUser = () => {
    if (pet.name === 'Efes') {
      setPet(boncuk)
    } else {
      setPet(efes)
    }
  }

  return ( 
    <div className="App">
      <WelcomeMessage pet={pet}>Hosgeldin</WelcomeMessage>
      {/* {
        name === 'Efes' ?
        <WriteEfes/> :
        <WriteBoncuk/>
      } */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={changeUser}>
          Change User
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <GoodbyeMessage pet={pet}></GoodbyeMessage>
      {/* {
        name === 'Efes' ?
        <WriteEfes/> :
        <WriteBoncuk/>
      } */}
    </div>
  )
}
// Everything that’s wrapped inside the parentheses returned by the component is called JSX

export default App



/*
Let's say the App component has a variable called message.
We can print this value in the JSX by adding {message} anywhere in the JSX.
import './App.css'

function App() {
  const message = 'Hello!'

  return (
    <div className='App'>
      <h1>{message}</h1>
      // Inside the curly brackets { } we can add any JavaScript statement.
    </div>
  )
}

export default App

OUTPUT WILL BE A BIG 'Hello!' ON THE WEB PAGE




We have a ternary operator where we define a condition (message === 'Hello!'), 
and we print one value if the condition is true, 
or another value (the content of message in this case) if the condition is false:

import './App.css'

function App() {
  const message = 'Hello!'

  return (
    <div className='App'>
      <h1>{message === 'Hello!' ? 'The message was "Hello!"' : message}</h1>
    </div>
  )
}

export default App

OUTPUT WILL BE - The message was "Hello!" - ON THE WEB PAGE
If we change const message = 'Bonjour!' then, according to the condition, output will be Bonjour!
*/




/* 
React provides an easy way to manage events fired from DOM events like clicks, form events and more.
Click events:
      <button
        onClick={(event) => {
          * handle the event *
        }}
      >
        Click here
      </button>

When the element is clicked, the function passed to the onClick attribute is fired.
You can also define this function outside of the JSX:
        const handleClickEvent = (event) => {
          * handle the event *
        }

        function App() {
          return <button onClick={handleClickEvent}>Click here</button>
        }

When the click event is fired on the button, React calls the event handler function.
React supports a vast amount of types of events
  + onKeyUp, 
  + onFocus, 
  + onChange, 
  + onMouseDown, 
  + onSubmit, and many more.
*/