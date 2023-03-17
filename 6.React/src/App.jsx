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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
// Everything that’s wrapped inside the parentheses returned by the component is called JSX

export default App



// function WelcomeMessage() {
//   return <h1>Welcome!</h1>
// }

// function App() {
//   return (
//     <div className='App'>
//       <WelcomeMessage />
//     </div>
//   )
// }

// export default App
// OUTPUT WILL BE A BIG 'WELCOME!' ON THE WEB PAGE