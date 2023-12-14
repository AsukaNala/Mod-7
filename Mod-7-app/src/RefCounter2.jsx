import { useState, useRef } from "react";

export default function RefCounter2() {
  // new counter stored in state
  const [countState, setCountState] = useState(0);

  let countRef = useRef(0);
  let count = 0;

  const handleClick = () => {
    countRef.current = countRef.current + 1;

    count = count + 1;
    console.log("click ref");
    alert(`You clicked ${countRef.current} (${count}) times :)`);
  };

  const handleClickState = () => {
    setCountState(countState + 1);
    console.log("click state");
  };

  return (
    <div className="RefCounter componentBox">
      <button onClick={handleClick}>REFCOUNTER: CLICK ME :P</button>
      Ref: {countRef.current} Var: {count}
      <br />
      <button onClick={handleClickState}>
        STATE COUNTER: Click me to UPDATE
      </button>
      State: {countState}
    </div>
  );
}

//State updates trigger a re-render of the component = re-initialises the variable but the ref value is remembered. normal variable is not rendered.
//the new ref value isnt't updated on the JSX until the state variable triggers a re-render.
//useRef...remembered the value changed but not rendered. used when needed to keep data outside of rendering cycle
