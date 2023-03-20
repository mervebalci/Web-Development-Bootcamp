import { useState } from 'react'    // Don't forget to import useState
import './App.css'
import Button from './components/Button'

function App() {
  // To store the count value, we use the useState hook to create a count state variable, 
  // and its setCount updating function:
  const [count, setCount] = useState(0)

  // We can now define the increment function in the App component, 
  // and we pass it to each Button component instance:
  const increment = (step) => {
    setCount(count + step)
  }

  const decrement = (step) => {
    setCount(count - step)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <div className='App'>
        <h1>Counter: {count}</h1>
        <Button step={1} functionality={increment}>+1</Button>
        <Button step={10} functionality={increment}>+10</Button>
        <Button step={100} functionality={increment}>+100</Button>
        <Button step={1000} functionality={increment}>+1000</Button>
      </div>
      <div>
        <Button step={1} functionality={decrement}>-1</Button>
        <Button step={10} functionality={decrement}>-10</Button>
        <Button step={100} functionality={decrement}>-100</Button>
        <Button step={1000} functionality={decrement}>-1000</Button>
      </div>
      <div>
        <Button functionality={reset}>Reset</Button>
      </div>
    </div>
  )
}

export default App
