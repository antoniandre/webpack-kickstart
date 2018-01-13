import './style.css';

function component() {
    var element = document.createElement('h1');
    element.innerHTML = "Hello World! ";

    return element;
}

document.body.appendChild(component());