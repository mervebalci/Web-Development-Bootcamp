import { useState } from "react"
import AddBill from "./components/AddBill"
import AddCategory from "./components/AddCategory"
import BillsTable from "./components/BillsTable"
import NavBar from "./components/NavBar"

function App () {
  const [showAddCategory, setShowAddCategory] = useState(true)

  const [categories, setCategories] = useState([])

  const addCategory = category => {
    const updatedCategories = [...AddBill(categories || []), category]
    setCategories(updatedCategories)
    setShowAddCategory(false)
  }
  // the [...(categories || []), category] construct allows us to create a new array 
  // from the existing categories, appending a new one. 
  // Takes care of the spread when the categories array is null or undefined, 
  // defaulting it to an empty array with || [].

  // Now add a onSubmit prop to the AddCategory component in the App component JSX, 
  // passing the addCategory function to it, 
  // so when the user submits the form, this function will be called 

  return (
    <div>
      {showAddCategory ? (<AddCategory onSubmit={addCategory} />) : (
        <div>
          <NavBar />
          <BillsTable />
        </div>
      )}
    </div>
  )
}

export default App
