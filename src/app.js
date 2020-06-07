/** @jsx Spreact.createElement */
import Spreact from "../spreact/spreact-dom.js";

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