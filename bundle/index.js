/** @jsx Spreact.createElement */
import Spreact, { render } from "../spreact/spreact.js";
import App from './app.js';
render(Spreact.createElement(App, null), document.getElementById("root"));