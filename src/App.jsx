import React from "react";
import DragWithNpm from "./components/DragWithNpm";
import DragWithCustom from "./components/DragWithCustom";
import IndexHtml from "./components/IndexHtml";

function App() {

  return (
    <>
      <div className="App"> 
      <div className="importFile">
        <p>Here is import index.html file from public folder !</p>
        <IndexHtml />
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
