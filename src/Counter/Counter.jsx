import React from "react";
import actions from "../store/actions";
import { useSelector } from "react-redux";

const Counter = () => {
  React.useEffect(()=> actions.set('value', 0),[])
  const value = useSelector(() => actions.get("value"));

  const increment = () => actions.update("value", (value) => value + 1);
  const decrement = () => actions.update("value", (value) => value - 1);

  return (
    <div>
      <p>Clicked: {value} times</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;

