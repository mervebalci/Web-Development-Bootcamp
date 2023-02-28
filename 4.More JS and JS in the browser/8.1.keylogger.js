const log = event => {
    const tr = document.createElement('tr')
    
    let td = document.createElement('td')
    td.innerHTML = event.key
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerHTML = event.code
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerHTML = event.altKey ? '✅' : '⛔️'
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerHTML = event.ctrlKey ? '✅' : '⛔️'
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerHTML = event.metaKey ? '✅' : '⛔️'
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerHTML = event.shiftKey ? '✅' : '⛔️'
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerHTML = event.repeat ? '✅' : '⛔️'
    tr.appendChild(td)
    
    document.querySelector('tbody').append(tr)
}
  
document.addEventListener('DOMContentLoaded', () => {  
    document.addEventListener('keydown', event => {
        log(event)
    })
})