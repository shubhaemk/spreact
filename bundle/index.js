import SpreactDOM from "../spreact/spreact-dom.js"; //import App from './app.js';

/** @jsx Spreact.createElementFromJSX */

import Spreact from "../spreact/spreact.js";

function tick() {
  const time = new Date().toLocaleTimeString();
  const clockElement = Spreact.createElementFromJSX("h1", null, time);
  SpreactDOM.render(clockElement, document.getElementById("root"));
}

tick();
setInterval(tick, 1000);