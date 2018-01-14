import path from 'path'
import './style.css'

const component = () => {
    let element = document.createElement('h1')
    element.innerHTML = "Hello World!"

    return element
}

document.body.appendChild(component())