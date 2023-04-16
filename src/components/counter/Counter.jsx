import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByValue, decrementByValue } from '../../features/counter/counterSlice';
export const Counter = () => {
  const { count } = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }
  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleIncrementBy = () => {
    const value = 5;
    dispatch(incrementByValue(value));
  }

  const handleDecrementBy = () => {
    const value = 5;
    dispatch(decrementByValue(value));
  }

  return (
    <div className="counter">
      <h1>counter : {count}</h1>
      <div>
        <button className="inc-btn" onClick={handleIncrement}>+</button>
        <button className="dec-btn" onClick={handleDecrement}>-</button>
        <button className="inc-by-btn" onClick={handleIncrementBy}>Increment By Value</button>
        <button className="dec-by-btn" onClick={handleDecrementBy}>Decrement By Value</button>
      </div>
    </div>
  );
};
