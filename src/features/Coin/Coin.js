import React from "react";
import { useSelector } from "react-redux";

export function Coin() {
  const coin = useSelector((state) => state.counter.value);
  const themeTextColor = useSelector((state) => state.theme.color);

  return (
    <div> 
      <span className="value" style={{color:themeTextColor}}>Coin:{coin}</span>
    </div>
  );
}