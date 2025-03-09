import React from "react";
import ThreeFiberScene from "@/components/threefiber_example";
import Header from "@/components/header";

import { getSortedPostsData } from "../../lib/posts";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import BlogCards from "@/components/blogCards";

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
                <BreadcrumbPage>
                  <BreadcrumbLink className="hover:text-neutral-400" asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <BlogCards posts={posts}></BlogCards>
          {/* <ol
            className="sm:m-8 flex sm:flex-row flex-wrap flex-col gap-y-4 sm:p-8 py-4 px-0 justify-center items-center"
            style={{ gap: "1rem" }}
          >
            {posts.map((post) => (
              <li key={post.id} className="">
                <Link className="" href={`blog/${post.id}`}>
                  <Card className="bg-slate-600/20 min-h-72 overflow-auto rounded-2xl hover:bg-slate-200 hover:bg-opacity-60 duration-300 max-w-80 hover:shadow-lg hover:shadow-slate-200/40 ">
                    <CardHeader className="p-0 rounded-2xl">
                      <Image
                        width={320}
                        height={320}
                        src={assetPathResolver("/blog/" + post.featImage)}
                        alt={post.alt}
                      />
                      <CardTitle className="leading-8 min-h-32 px-4 py-4">
                        {post.title}
                      </CardTitle>
                    </CardHeader>{" "}
                    <CardFooter className="p-0 px-4 pb-2 flex flex-row flex-wrap gap-4 justify-between">
                      <div className=" flex flex-row flex-wrap gap-2">
                        {post.categories.splice(0, 3).map((c: string) => (
                          <Link
                            className={badgeVariants({ variant: "default" })}
                            key={c}
                            href={`/category/${c}`}
                          >
                            {c}
                          </Link>
                        ))}
                      </div>
                      <div className=" flex flex-row flex-wrap gap-2">
                        {post.tags.splice(0, 2).map((t: string) => (
                          <Link
                            className={badgeVariants({ variant: "secondary" })}
                            key={t}
                            href={`/tag/${t}`}
                          >
                            {t}
                          </Link>
                        ))}
                      </div>
                    </CardFooter>
                    <CardContent className="p-4">{post.intro}</CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ol> */}
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
