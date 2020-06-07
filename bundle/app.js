/** @jsx Spreact.createElement */
import Spreact from "../spreact/spreact-dom.js";
const backgroundColorList = ["Blue", "Green", "Red"];
const App = Spreact.createElement("div", null, backgroundColorList.map(color => {
  return Spreact.createElement("div", null, color);
}));
export default App;