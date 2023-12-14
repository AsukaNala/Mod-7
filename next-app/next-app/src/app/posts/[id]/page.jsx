//Dynamic routes
import Link from "next/link";

async function getPostData(id) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/" + "posts/" + id
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post #" + id);
  }

  return res.json();
}

//uses params prop to get value of [id] from path segment

export default async function Post({ params }) {
  const post = await getPostData(params.id);

  return (
    <>
      <div className="Posts">
        {post ? (
          <>
            <h3>
              Posts #{post.id}: {post.title}
            </h3>
            <p>{post.body}</p>
          </>
        ) : (
          "Loading"
        )}
      </div>
      <div>
        <Link href="/posts/">All Posts/</Link>
        {"   "}
        <Link href={`/posts/${post.id + 1}`}>Next Post/</Link> {"   "}
        <Link href={`/posts/${post.id - 1}`}>Previous Post</Link>
      </div>
    </>
  );
}
