// Without js code, when you click the button, nothing happens.
// We need to listen for the click event on the HTML element.
// Let's start simple and add an alert box to pop-up when the button is clicked.

document.querySelector('button').addEventListener('click', () => {
    alert('click')
})

// So we have selected an element (the button element) and we added an event listener to it, so we can react to clicks.
// This event listener is a function: a callback function (it’s called whenever the event fires).

// No need to listen for the DOMContentLoaded event because in HTML file, we used "defer" attribute.
// Scripts with "defer" attribute do the same what DOMContentLoaded event does.

document.querySelector('button').addEventListener('click', () => {
    const value = document.querySelector('#result').innerText
    alert(value)
})

// Now we can use the built-in parseInt() function to read that .innerText value as an integer value rather than a string.
// We can increment that number, and then we can use that as the new innerText value of the #result span:

document.querySelector('button').addEventListener('click', () => {
    const value = document.querySelector('#result').innerText

    const incrementedValue = parseInt(value) + 1

    document.querySelector('#result').innerText = incrementedValue
})