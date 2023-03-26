import { useState, useEffect } from 'react'
import AddBill from './components/AddBill'
import AddCategory from './components/AddCategory'
import BillsTable from './components/BillsTable'
import NavBar from './components/NavBar'

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(false)
  const [shouldShowAddBill, setShouldShowAddBill] = useState(false)
  const [categories, setCategories] = useState([])
  const [bills, setBills] = useState([])
  const [activeCategory, setActiveCategory] = useState('')

  // In addition to storing the data, we also need to retrieve it when the application starts.
  // To do that, we use the Effect hook.
  useEffect(() => {
    const categoriesInLocalStorage = JSON.parse(
      localStorage.getItem('categories')
    )
    const billsInLocalStorage = JSON.parse(localStorage.getItem('bills'))
  
    setCategories(categoriesInLocalStorage)
    setBills(billsInLocalStorage)
  
    if (!categoriesInLocalStorage) {
      setShouldShowAddCategory(true)
    }
  
    if (!billsInLocalStorage) {
      setShouldShowAddBill(true)
    }
  }, [])
  // If you add a console.log() in the useEffect() callback you'll notice this function continuously runs,
  // because we continuously call the setShowAddCategory() method, which in turns causes a rerender of the component.
  // The useEffect() hook is called on component mount, and on component update. 
  // We need to add a second argument to useEffect, an empty array, to only run our effect on mount.
  // Finally, we default the value of showAddCategory to false. Otherwise we'd always see the "add category" screen first.

  const showAddCategory = () => {
    setShouldShowAddCategory(true)
  }

  const showAddBill = () => {
    setShouldShowAddBill(true)
  }

  const addCategory = (category) => {
    const updatedCategories = [...(categories || []), category]
    setCategories(updatedCategories)

    // In the previous step we added a form to insert a new category.
    // However, when we reload the page in the browser we're presented that form again, 
    // because the category was not persisted anywhere.
    // Let's save the category to local storage.
    localStorage.setItem('categories', JSON.stringify(updatedCategories))
    setShouldShowAddCategory(false)
  }
  // the [...(categories || []), category] construct allows us to create a new array 
  // from the existing categories, appending a new one. 
  // Takes care of the spread when the categories array is null or undefined, 
  // defaulting it to an empty array with || [].

  // Now add a onSubmit prop to the AddCategory component in the App component JSX, 
  // passing the addCategory function to it, 
  // so when the user submits the form, this function will be called

  const addBill = (amount, category, date) => {
    const bill = { amount, category, date }
    const updatedBills = [...(bills || []), bill]
    setBills(updatedBills)
    setShouldShowAddBill(false)
    localStorage.setItem('bills', JSON.stringify(updatedBills))
  }

  const removeBill = index => {
    let updatedBills = [...bills]
    updatedBills = updatedBills
      .slice(0, index)
      .concat(updatedBills.slice(index + 1, updatedBills.length))
    setBills(updatedBills)
    localStorage.setItem('bills', JSON.stringify(updatedBills))
  }

  const activeBills = () => {
    return bills
      ?.filter(bill =>
        activeCategory ? bill.category === activeCategory : true
      )
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
  }

  const setNewActiveCategory = index => {
    setActiveCategory(index)
  }

  return (
    <div className="App">
      {shouldShowAddCategory ? (
        <AddCategory onSubmit={addCategory} />
      ) : shouldShowAddBill ? (
        <AddBill onSubmit={addBill} categories={categories} />
      ) : (
        <div>
          <NavBar
            categories={categories}
            showAddCategory={showAddCategory}
            activeCategory={activeCategory}
            setNewActiveCategory={setNewActiveCategory}
          />
          <div className="container flex">
            <div className="w-1/2">
            <BillsTable
              bills={activeBills()}
              showAddBill={showAddBill}
              removeBill={removeBill}
            />
            </div>
            {/* <div className="w-1/2">
              <Chart />
            </div> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
