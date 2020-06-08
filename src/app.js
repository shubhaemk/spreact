/** @jsx Spreact.createElementFromJSX */
import Spreact from "../spreact/spreact.js";

const backgroundColorList = [
    "Blue",
    "Green",
    "Red"
]


const App = (
  <div>
      {
        backgroundColorList.map(color => {
            return <div>{color}</div>
        })
      }
  </div>
);
export default App;