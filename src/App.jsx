import React from "react";
import DragWithNpm from "./components/DragWithNpm";
import DragWithCustom from "./components/DragWithCustom";

function App() {

  return (
    <>
      <div className="App"> 
      <div className="importFile">
        <p>Here is import index.html file from public folder !</p>
        {<iframe src="/index.html" title="Index" className="iframe-div"></iframe>}
      </div>
        <div>
          <DragWithCustom />
        </div>
        <DragWithNpm />
      </div>
    </>
  );
}

export default App;
