import { useEffect, useReducer } from "react";
import axios from "axios";

export default function PostListReducer() {
  const [postResult, dispatch] = useReducer(reducer, {
    //initilal state as object
    loading: true,
    post: [],
    error: "",
  });

  useEffect(() => {
    //axios can cancel request so doesn't need cleanup function?
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => {
        //object passed to dispatch holds all data needed for updateing staet: both type of update and associated data
        //console.log(response.data);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data }); // dispatch calls reducer function and triggers re-render
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message }); //lets us handle different types of state changes differently
      });
  }, []);

  // returned JSX uses the 3 things stored in postResult state object to conditionally render data or an error message

  return (
    <div className="postList componentBox">
      {postResult.loading ? (
        <div>Loading posts. . . </div>
      ) : (
        postResult.posts.map((post) => (
          <div className="post" key={post.id}>
            <h3>
              Post #{post.id}: {post.title}
            </h3>
            <p>{post.body}</p>
          </div>
        ))
      )}

      <div className="error">{postResult.error}</div>
    </div>
  );
}

//reducer function for axios fetch response
//called from dispatch when state is updated, lets us handle different actions
//return object should match same structure as initial state passed to useReducer

function reducer(postResult, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, posts: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, posts: [], error: action.payload };
    default:
      return { ...postResult, loading: false };
  }
}
