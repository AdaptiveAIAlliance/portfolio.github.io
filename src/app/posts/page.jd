import React from "react";
import styles from "../page.module.css";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const posts = await getPosts();

export default async function PostsPage() {
  return (
    <main className={styles.main}>
      <h1>Posts archive</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </main>
  );
}
