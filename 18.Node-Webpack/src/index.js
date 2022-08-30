import _ from 'lodash';
import myName from './myName';
import './style.css'
import webpack from './webpack.svg'
import Data from './data.xml';
import Notes from './data.csv';

import printFunc from './print'

function component() {
    const element = document.createElement('div');

    element.innerHTML = myName('Red')
    element.classList.add('hello');

    const myImage = new Image();
    myImage.src = webpack;

    element.appendChild(myImage);

    return element;
}

document.body.appendChild(component());

console.log(Data);
console.log(Notes);

printFunc();