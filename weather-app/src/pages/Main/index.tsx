import React from "react";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { counterSlice } from "../../store/reducers/testSlice";
import { Clock } from "../../components";

function Main() {
  const { count } = useAppSelector((state) => state.testSlice);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(counterSlice.actions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterSlice.actions.decrement());
  };

  return (
    <div className="App">
      <Clock />
      <div>{count}</div>
      <Button variant="contained" color="secondary" onClick={handleIncrement}>
        +
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDecrement}>
        -
      </Button>
    </div>
  );
}

export default Main;
