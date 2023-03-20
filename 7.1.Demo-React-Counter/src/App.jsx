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

  return (
    <div className='App'>
      <h1>Counter: {count}</h1>
      <Button step={1} increment={increment} />
      <Button step={10} increment={increment} />
      <Button step={100} increment={increment} />
      <Button step={1000} increment={increment} />
    </div>
  )
}

export default App
