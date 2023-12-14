import { useState, useEffect } from "react";
import axios from "axios";

function PostListState() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => {
        //console.log(response.data);
        setPosts(response.data);
        setLoading(false);
        setError("");
      })
      .catch((error) => {
        setPosts([]);
        setLoading(false);
        setError(error.message);
      });
  }, []);

  return (
    <div className="PostListState componentBox">
      <h3>Post Lists</h3>
      {loading ? (
        <div>Loading now...</div>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h3>
              Post # {post.id}: {post.title}
            </h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default PostListState;
