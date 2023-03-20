/*
One of the main building blocks of the application is a button.
There'll be 4 of them, so it's better to separate that piece of UI and move it to its own component.

To save this component, we created Button.jsx file inside src/component folder.
Then import this Button.jsx file in src/App.jsx and add the component to the JSX.
        function Button() {
        return <button>button</button>
        }

        export default Button
*/



// Adding multiple buttons with increment +1, +10, +100, these values will be passed as a step prop to the component:

// Then, to add the functionality which is changing the count by clicking the buttons, need to add increment prop. 
// We pass that to the Button component, and we use onClick event handler that intercepts automatically the clicks made on the button.
// It calls callback function that calls increment() passing the step value, which will be 1, 10 or 100 in our case:
function Button({ step, increment }) {

  return (
    <button 
      onClick={() => {
        increment(step)
      }}>
      +{step}
    </button>
  )
}

export default Button