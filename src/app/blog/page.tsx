import React from "react";
import styles from "../page.module.css";
import ThreeFiberScene from "@/components/threefiber_example";
import Header from "@/components/header";

import { getSortedPostsData } from "../../lib/posts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <>
      <ThreeFiberScene />
      <Header />
      <main className="flex text-neutral-900  dark:text-emerald-100 flex-col justify-between sm:px-24 px-8   pt-32 mb-16 ">
        <section className="my-4 border-slate-100 border rounded-3xl p-4   w-full sm:w-full justify-items-start text-neutral-900 dark:text-emerald-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 dark:bg-emerald-900 bg-opacity-60 dark:bg-opacity-40 dark:border-neutral-950">
          <h1 className="text-3xl p-4">Posts archive</h1>
          <Breadcrumb className="mx-8">
            <BreadcrumbList className=" text-neutral-900 dark:text-emerald-100">
              <BreadcrumbItem>
                <BreadcrumbPage className="hover:text-neutral-400">
                  <Link href="/">Home</Link>
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <ol
            className="sm:m-8 flex sm:flex-row flex-col gap-y-4 sm:p-8 p-4 justify-center items-start"
            style={{ gap: "1rem" }}
          >
            {posts.map((post) => (
              <li key={post.id} className="">
                <Link className="" href={`blog/${post.id}`}>
                  <Card className="bg-slate-600/20 min-h-72 overflow-auto rounded-2xl hover:bg-slate-200 hover:bg-opacity-60 duration-300 sm:w-80 hover:shadow-lg hover:shadow-slate-200/40 ">
                    <CardHeader className="p-0 rounded-2xl">
                      <Image
                        width={320}
                        height={320}
                        src={"blog/" + post.featImage}
                        alt="test"
                      />
                      <CardTitle className="min-h-28 p-4">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">{post.intro}</CardContent>
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