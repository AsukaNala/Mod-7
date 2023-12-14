import { useRef } from "react";

export default function RefCounter() {
  let countRef = useRef(0); //one counter stared in a ref
  let count = 0; //one counter stored in a normal variable

  const handleClick = () => {
    //update countRed object when clicking via current property

    countRef.current = countRef.current + 1;

    count = count + 1; // update count variable when clicking

    // both counts should be the same value

    alert(`You clicked ${countRef.current}  (${count}) times!`);
    console.log("rendering");
  };

  return (
    <div className="RefCounter componentBox">
      <button onClick={handleClick}>REFCOUNTER: CLICK ME!</button>
    </div>
  );
}

// Any variables rendered inside the returned JSX should be part of STATE, so that updates trigger re-rendering and keep  everything in sync.
//Updates to refs and normal variables DO NOT  trigger re-renders, so the updated count values don’t show.
