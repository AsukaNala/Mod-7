import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());
  const [tickCount, setTickCount] = useState(0);

  useEffect(() => {
    //first argument is usually an arrow function
    let clockInterval = setInterval(() => tick(), 5000);
    console.log("Clock component mounted");
    return () => {
      // when it's unmounted. cleanup function.
      setTickCount(0);

      console.log("Clock component unmounted");
      clearInterval(clockInterval);
    };
  }, []); // second arg is an array of dependencies([]はuseEffectが使われるタイミング、つまりどのstateが変更されたときに使われるか。空は初回のみ。useEffect はfetchAPIが入ることが多い。)

  const tick = () => {
    setTickCount((tickCount) => tickCount + 1);
    setDate(new Date());
    console.log("tick"); // track the effect frequency
  };

  return (
    <div className="Clock">
      <h2>Digital Clock</h2>
      {date.toLocaleTimeString()}
      <p>Tick Count : {tickCount}</p>
    </div>
  );
}

export default Clock;

//witout [](second arg of useEffect), it is called every render
