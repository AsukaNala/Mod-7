import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <h1>Page Not Found</h1>
      <p>
        What were you looking for? Maybe going back <Link to="/">home</Link>{" "}
        will help upi find it.
      </p>
    </div>
  );
}

export default PageNotFound;

// ++ Add a Back button to navigate one page back in the history <button onClick={()=>navigate(-1)}Back</button>

// ++ Add a standard <a href> link as well and observe the difference <a href="/">home</a>
