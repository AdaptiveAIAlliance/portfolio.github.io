"use client";

import { getSortedPostsData } from "../../lib/posts";

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

import BlogCards from "@/components/BlogCardsBlock";
import { GetStaticProps } from "next";
import { posts } from "@/types/types";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getSortedPostsData();

  return {
    props: {
      posts,
    },
  };
};
// async function getPosts() {
//   const allPostsData = getSortedPostsData();

//   // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return allPostsData;
// }

export default function PostsPage({ posts }: { posts: posts }) {
  // const posts = await getPosts();
  console.log(posts[0].tags);

  return (
    <>
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
          <BlogCards posts={posts} uiSwitch={null}></BlogCards>
        </section>
      </main>
    </>
  );
}
