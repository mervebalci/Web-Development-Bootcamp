/*
We must have a way now to ask GitHub for the details of a single username. 
We'll do so using a Form component, where we manage our own state (username), 
and we ask GitHub for information about a user using their public APIs, via the Axios library.

Our form will hosts a single input element, and a button. Let's add them to the JSX, adding some Tailwind CSS styling:

We make the form handle a piece of state called username. 
When the username is updated, we are notified in the onChange() event callback.
In there, we update the username value by calling setUsername():

Next, we handle the form submit event, which is emitted when the user clicks the "Add card" button, 
automatically because the button is type="submit".
*/

import { userState } from 'react'

function Form(props) {
    const [username, setUsername] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()

        const response = await fetch(`https://api.github.com/users/${username}`)
        if (response.status === 200) {
            const data = await response.json()
            props.onSubmit(data)    // Calling the onSubmit prop, which is passed by the App
            setUsername('')     // Resetting the username
        } else {
            alert('Username not found!')
        }
    }
// The fetch() function returns a promise, so we use await to wait for that to resolve.
// The same for the .json() method on the response.
// So we must set handleSubmit() as an async function:


    return (
        <form className='w-full max-w-sm mx-auto' onSubmit={handleSubmit}>
            <div className='mt-10 flex'>
                <input
                    name='username'
                    required
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className='form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outlne-blue focus:border-blue-300'/>
                <button
                    type='submit'
                    className='ml-2 py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800'>
                    Search
                </button>
            </div>
        </form>
    )
}

export default Form


/*
To recap, when you enter a name in the input field managed by the Form component, 
this name is bound to its state.

When Add card is pressed, the input form is cleared by clearing the userName state of the Form component.

When the form is submitted we call the handleSubmit event, 
and after the network call, we call props.onSubmit passing the parent (App) the data we got from GitHub.
*/