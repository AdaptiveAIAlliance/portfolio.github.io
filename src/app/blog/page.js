import React from "react";
import styles from "../page.module.css";
import ThreeFiberScene from "@/components/threefiber_example";
import Header from "@/components/header";

import { getSortedPostsData } from "../../lib/posts";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

async function getPosts() {
  const allPostsData = getSortedPostsData();

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return allPostsData;
}

const posts = await getPosts();

export default async function PostsPage() {
  return (
    <>
      <ThreeFiberScene />
      <Header />
      <main className="flex text-neutral-900  dark:text-emerald-100 flex-col justify-between sm:px-24 px-8   pt-32">
        <section className="my-4 border-slate-100 border rounded-3xl p-4   w-full sm:w-full justify-items-start text-neutral-900 dark:text-emerald-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 dark:bg-emerald-900 bg-opacity-60 dark:bg-opacity-40 dark:border-neutral-950">
          <h1 className="text-3xl p-4">Posts archive</h1>

          <ol
            className="m-8 flex sm:flex-row flex-col gap-y-4 p-8 justify-center align-middle items-center"
            style={{ gap: "1rem" }}
          >
            {posts.map((post) => (
              <li key={post.id} className="w-full ">
                <Link href={`blog/${post.id}`}>
                  <Card className="bg-slate-500/80  hover:bg-slate-200 hover:bg-opacity-60 duration-300 ">
                    <CardContent className="p-4 m-4">{post.title}</CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section> */}
      </main>
    </>
  );
}
