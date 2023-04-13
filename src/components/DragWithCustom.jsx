import React, { useState } from "react";

const DragWithCustom = () => {
  const [position, setPosition] = useState({
    diffX: 0,
    diffY: 0,
    style: {},
  });
  const [styleTag , setStyleTag] = useState({left:500, top:9})
  const [dragging, setDragging] = useState(false);

  const dragStart = (e) => {
    setPosition({
      diffX: e.screenX - e.target.offsetLeft,
      diffY: e.screenY - e.target.offsetTop,
    });
    setDragging(true)
  };

  const dragOver = (e) => {
    if (dragging) {
      var left = e.screenX - position.diffX;
      var top = e.screenY - position.diffY;
      setStyleTag({
        left: left,
        top: top
      })
    }
  };

  const dragEnd = () => {
    setDragging(false);
  };
console.log(styleTag.left, styleTag.top);
  return (
    <div
      className="drag-box"
      style={{left:styleTag.left, top:styleTag.top}}
      onMouseDown={dragStart}
      onMouseMove={dragOver}
      onMouseUp={dragEnd}
    >
      Drag by custom!
    </div>
  );
};

export default DragWithCustom;
