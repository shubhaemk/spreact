import SpreactDOM from "../spreact/spreact-dom.js";
//import App from './app.js';

/** @jsx Spreact.createElementFromJSX */
import Spreact from "../spreact/spreact.js";


function tick() {
    const time = new Date().toLocaleTimeString();
    const clockElement = <h1>{time}</h1>;
    SpreactDOM.render(clockElement, document.getElementById("root"));
}

tick();
setInterval(tick, 1000);