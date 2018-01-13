import './style.css';
import Icon from './en-flag.png';

function component() {
    var element = document.createElement('h1');
    element.innerHTML = "Hello World! ";

    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());