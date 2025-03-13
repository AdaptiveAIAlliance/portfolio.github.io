import React from "react";
import styles from "../page.module.css";
import ThreeFiberScene from "@/components/ThreefiberExample";
import Header from "@/components/Header";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const posts = await getPosts();

export default async function PostsPage() {
  return (
    <>
      <ThreeFiberScene />
      <Header />
      <main className={styles.main}>
        <h1>Posts archive</h1>
        <ol>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ol>
      </main>
    </>
  );
}
