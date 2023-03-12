/*
In order to start working with forms with JavaScript 
you need to intercept the submit event on the form element:

Inside the submit event handler function we call the event.preventDefault() method 
to prevent the default behavior and avoid a form submission to reload the page:

You’ll also need to wrap that in the DOMContentLoaded event callback, 
so your event handler is attached to the DOM element after the DOM has been loaded 
(otherwise it might be attached before, failing):
*/

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', event => {
        // submit event detected
        event.preventDefault()
        alert('form submit event!')
    })
})