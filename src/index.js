import _ from 'lodash';
import template from "./index.html";
import "./style.scss";
function component() {
    const element = document.createElement('div');
    element.className = "wrapper";
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = template;
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());