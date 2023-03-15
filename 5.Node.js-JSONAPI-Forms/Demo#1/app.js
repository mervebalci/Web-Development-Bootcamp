// Wrapping all the code inside DOM:
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        const username = document.querySelector('input').value
        
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        console.log(data)
    })
})
