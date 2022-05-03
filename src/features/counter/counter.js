import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const themeTextColor = useSelector((state) => state.theme.color);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="button"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <span className="value" style={{ color: themeTextColor }}>
        Count:{count}
      </span>
      <button
        className="button"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>

      <button
        className="button"
        onClick={() => dispatch(incrementByAmount(10))}
      >
        Increment By 10
      </button>
      <button
        className="button"
        onClick={() => dispatch(decrementByAmount(10))}
      >
        Decrement By 10
      </button>
    </div>
  );
}
