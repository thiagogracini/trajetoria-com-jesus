import Link from "next/link.js";
import { getAllPosts } from "../lib/posts.js";

function Home() {
  const posts = getAllPosts();
  return (
    <>
      <h1>Página em construção =)</h1>
      <ul>
        {posts.map((post) => (
          <li>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
