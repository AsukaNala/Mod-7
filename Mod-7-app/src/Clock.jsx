import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    //first argument is usually an arrow function
    setInterval(() => tick(), 10000);
    //console.log("Clock component mounted");
  }, []); // second arg is an array of dependencies(どのstateが更新されたときにuseEffectが走るか選べる。空は初回のみ。APIが入ることが多い。)

  const tick = () => {
    setDate(new Date());
    //console.log("tick"); // track the effect frequency
  };

  return (
    <div className="Clock componentBox">
      <h2>Digital Clock</h2>
      {date.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
