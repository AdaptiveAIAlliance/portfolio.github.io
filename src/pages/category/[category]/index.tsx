import ThreeFiberScene from "@/components/ThreefiberExample";
import {
  getPostData,
  getAllPostIds,
  getCategories,
  getSortedPostsData,
} from "../../../lib/posts";

import Header from "@/components/HeaderBar";
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
import BlogCards from "@/components/BlogCardsBlock";
import { post, posts } from "@/types/types";
import { GetStaticPaths, GetStaticProps } from "next";
// export async function generateStaticParams() {
//   const paths = await getCategories();

//   return paths.map((path) => ({
//     category: path,
//   }));
// }

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getCategories();

  return {
    paths: paths.map((category) => ({
      params: { category },
    })),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string;
  const postsData: posts = await getSortedPostsData();

  const postsDataJson = JSON.stringify(postsData);
  return {
    props: {
      category,
      postsDataJson,
    },
  };
};

export default function CategoryPage({
  category,
  postsDataJson,
}: {
  category: string;
  postsDataJson: string;
}) {
  console.log(category);
  const posts = JSON.parse(postsDataJson).filter((p: post) =>
    p.categories.includes(category)
  );
  // console.log(posts.map((p) => p.categories));
  // console.log("posts");
  // console.log(posts);
  // const category = params.category;
  // const postsData: posts = await getSortedPostsData();

  return (
    <>
      <main className="flex text-neutral-900  dark:text-emerald-100 flex-col justify-between sm:px-24 px-8   pt-32">
        <section className="border-slate-100 border  rounded-3xl overflow-hidden  mb-16 w-full sm:w-full justify-items-start text-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 dark:bg-emerald-900 bg-opacity-60 dark:bg-opacity-40 dark:border-neutral-950">
          <h1 className="text-2xl p-4  dark:text-emerald-100 ">{category}</h1>
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
                  <Link href="/category">categories</Link>
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{category}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <BlogCards posts={posts} uiSwitch={null}></BlogCards>
        </section>
      </main>
    </>
  );
}
