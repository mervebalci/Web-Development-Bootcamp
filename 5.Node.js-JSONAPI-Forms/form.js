const usernameField = document.querySelector('#username')

usernameField.addEventListener('input', () => {
    console.log(usernameField.value)
})


// The addEventListener callback accepts an event object 
// and you can reference the element using event.target 
// instead of using document.querySelector() again:
    // usernameField.addEventListener('input', (event) => {
    //   console.log(event.target.value)
    // })