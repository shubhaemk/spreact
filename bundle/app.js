/** @jsx Spreact.createElementFromJSX */
import Spreact from "../spreact/spreact.js";
const backgroundColorList = ["Blue", "Green", "Red"];
const App = Spreact.createElementFromJSX("div", null, backgroundColorList.map(color => {
  return Spreact.createElementFromJSX("div", null, color);
}));
export default App;