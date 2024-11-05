import { useReducer } from "react";

function reducer(state, action) {}

function DateCounter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return <div>DateCounter</div>;
}

export default DateCounter;
