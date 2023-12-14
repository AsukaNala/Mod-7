import { useReducer } from "react";

function ReducerCounter() {
  //returns array with the state variable and a dispatch function

  const [counter, dispatch] = useReducer(reducer, 0); //useReducer takes a reducer function and the initial state value

  const handleIncrement = () => {
    //we call the dispatch function to make(dispatch) all state updates
    dispatch({ type: "increment" });
    console.log("increment");
  };

  const handleDecrement = () => {
    // dispatch takes a single argument-object passed to reducer
    dispatch({ type: "decrement" });
  };
  const handleIncrement5 = () => {
    //we call the dispatch function to make(dispatch) all state updates
    dispatch({ type: "increment5" });
  };

  const handleDecrement5 = () => {
    // dispatch takes a single argument-object passed to reducer
    dispatch({ type: "decrement5" });
  };

  return (
    <div className="ReducerCounter componentBox">
      <h2>Count: {counter}</h2>
      <button onClick={handleIncrement}>Reducer Increment</button>
      <button onClick={handleDecrement}>Reducer Decrement</button>
      <br />
      <button onClick={handleIncrement5}>Reducer Increment by 5</button>
      <button onClick={handleDecrement5}>Reucer Decrement by 5</button>
    </div>
  );
}

export default ReducerCounter;

//ruducer function - can be called anything
//takes 2 arguments: the current state, and the action to be taken
//action is passed via dispatch, state is stored in component

// can go in ReducerCounter component
const reducer = (state, action) => {
  switch (
    action.type // switch statements are common in reducers
  ) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "increment5":
      return state + 5;
    case "decrement5":
      return state - 5;

    default:
      return state;
  }
};

//reducer function returns the new value of state after taking action

// ++ Try to add more buttons for incrementing and decrementing by 5:
// 1. Add the buttons
// 2. Add handler functions which dispatch new types
// 3. Update the reducer function to handle the new types
