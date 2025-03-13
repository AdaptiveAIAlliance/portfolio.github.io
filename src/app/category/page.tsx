import React from "react";
import styles from "../page.module.css";
import ThreeFiberScene from "@/components/ThreefiberExample";
import Header from "@/components/Header";

import { getCategories } from "../../lib/posts";
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

async function getPostCategories() {
  const categories = getCategories();

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return categories;
}

export default async function CategoryPage() {
  const categories = await getPostCategories();

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
                <BreadcrumbPage>categories</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <ol
            className="sm:m-8 flex sm:flex-row flex-col flex-wrap gap-y-4 sm:p-8 p-4 justify-center items-start"
            style={{ gap: "1rem" }}
          >
            {categories.map((category: string) => (
              <li key={category} className="">
                <Link className="" href={`category/${category}`}>
                  <Card className="bg-slate-600/20  overflow-auto rounded-2xl hover:bg-slate-200 hover:bg-opacity-60 duration-300 hover:shadow-lg hover:shadow-slate-200/40 ">
                    <CardHeader className="p-0 rounded-2xl">
                      <CardTitle className="text-center content-center p-4">
                        {category}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
}
