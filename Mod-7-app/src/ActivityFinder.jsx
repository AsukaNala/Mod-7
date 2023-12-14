import { useState, useEffect } from "react";
function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  const [activity, setActivity] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    //console.log("running effect");
    let ignore = false; // flag to allow ignoring of the fetch result
    //for example entered 'back'(doen't need to render)

    fetch(
      //"https://www.boredapi.com/api/activity?" + "participants=" + participants //?query(express no toko) in browser
      "https://www.boredapi.com/api/activity?" +
        "participants=" +
        participants +
        "&type=" +
        type
    )
      .then((response) => response.json())
      .then((json) => {
        //setActivity(json.activity);

        // only update state if the effect is still valid
        // ie. the dependency hasn't changed since the request
        if (!ignore) {
          setActivity(json.activity);
        }
      });
    return () => {
      ignore = true; //ignore is now invalid fetch results.(before fetch result is returned)
      //console.log("cleanup effect");
    };
  }, [participants, type]); //when participants updated it's called.can have more dependencies
  return (
    <div className="ActivityFinder componentBox">
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select
          name="participants"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <label>
        <br />
        Choose type of activity:
        <select
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>education</option>
          <option>recreational</option>
          <option>social</option>
          <option>diy</option>
          <option>charity</option>
          <option>cooking</option>
          <option>relaxation</option>
          <option>music</option>
          <option>busywork</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity: </strong>
        {activity}
      </div>
    </div>
  );
}
export default ActivityFinder;
