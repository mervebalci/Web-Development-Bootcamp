// Wrapping all the code into DOM:
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const username = document.querySelector('input').value
        alert(username)
    })
})
