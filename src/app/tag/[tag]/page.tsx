import ThreeFiberScene from "@/components/ThreefiberExample";
import {
  getPostData,
  getAllPostIds,
  getCategories,
  getSortedPostsData,
  getTags,
} from "../../../lib/posts";

import Header from "@/components/Header";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { assetPathResolver } from "@/utils/utils";
import BlogCards from "@/components/BlogCards";
import { useEffect, useState } from "react";
export async function generateStaticParams() {
  const paths = await getTags();

  return paths.map((path) => ({
    tag: path,
  }));
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const tag = params.tag;
  let postsData: posts = await getSortedPostsData();

  console.log("postsData[0].tags");
  console.log(postsData[0].tags);

  return (
    <>
      <ThreeFiberScene />
      <Header />
      <main className="flex text-neutral-900  dark:text-emerald-100 flex-col justify-between sm:px-24 px-8   pt-32">
        <section className="border-slate-100 border  rounded-3xl overflow-hidden  mb-16 w-full sm:w-full justify-items-start text-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 dark:bg-emerald-900 bg-opacity-60 dark:bg-opacity-40 dark:border-neutral-950">
          <h1 className="text-2xl p-4  dark:text-emerald-100 ">{tag}</h1>
          <Breadcrumb className="mx-8">
            <BreadcrumbList className=" text-neutral-900 dark:text-emerald-100 m-4">
              <BreadcrumbItem>
                <BreadcrumbPage className="hover:text-neutral-400">
                  <Link href="/">Home</Link>
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="hover:text-neutral-400">
                  <Link href="/blog">blog</Link>
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="hover:text-neutral-400">
                  <Link href="/tag">tags</Link>
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{tag}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <BlogCards
            posts={postsData.filter((p) => p.tags.includes(tag))}
          ></BlogCards>
        </section>
      </main>
    </>
  );
}
