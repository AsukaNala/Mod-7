import { useState, useEffect } from "react";
import { useData } from "./hooks/useData";

function ActivityFinder2() {
  // fetch a random activity

  const [participants, setParticipants] = useState(1);
  const [type, setType] = useState("");

  // uses custom hook to handle the effect for loading external data
  const data = useData(
    "https://www.boredapi.com/api/activity?" +
      "participants=" +
      participants +
      "&type=" +
      type
  );

  // get the activity from the json or show error message if failed
  const activity = data ? data.activity : "not found";

  return (
    <div className="ActibvityFinder2 componentBox">
      <h3>Activity Finder 2 with useData hook</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </label>{" "}
      <br />
      <label>
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
        <strong>Suggested Activity:</strong>
        {activity}
      </div>
    </div>
  );
}

export default ActivityFinder2;

// ++ Add a second use of useData to fetch activities based on type
