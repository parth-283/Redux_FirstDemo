import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeBgColor, changeTextColor } from "./ThemeSlice";

function Theme() {
  const [color, setColor] = useState("white");
  const dispatch = useDispatch()

  return (
    <div>
      <div>
      <label className="value">Enter Text Color</label>
      <input
        className="textbox"
        type="text"
        onChange={(e) => setColor(e.target.value)}
      />
      <button className="button" onClick={() => {dispatch(changeTextColor(color))}}>
        Change Text Color
      </button>
      </div>
      <div>
      <label className="value"> Enter BGColor Color</label>
      
       <input
        className="textbox"
        type="text"
        onChange={(e) => setColor(e.target.value)}
      />
      <button className="button" onClick={() => {dispatch(changeBgColor(color))}}>
        Change BgColor Color
      </button>
      </div>
    </div>
  );
}

export default Theme;
