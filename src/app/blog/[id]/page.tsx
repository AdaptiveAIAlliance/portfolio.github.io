import ThreeFiberScene from "@/components/threefiber_example";
import { getPostData, getAllPostIds } from "../../../lib/posts";
import Header from "@/components/header";
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
import { assetPathResolver } from "@/utils/utils";
import { badgeVariants } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import BlogAuthor from "@/components/blogAuthor";
export async function generateStaticParams() {
  const paths = await getAllPostIds();

  return paths.map((path) => ({
    id: path.params.id,
  }));
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const postData: post = await getPostData(params.id);

  return (
    <>
      <ThreeFiberScene />
      <Header />
      <main className="flex text-neutral-900  dark:text-emerald-100 flex-col justify-between sm:px-24 px-8   pt-32">
        <article className="border-slate-100 border  rounded-3xl overflow-hidden  mb-16 w-full sm:w-full justify-items-start text-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 dark:bg-emerald-900 bg-opacity-60 dark:bg-opacity-40 dark:border-neutral-950">
          <div className="h-52 overflow-hidden">
            <Image
              className="w-full m-auto -translate-y-1/2"
              width={320}
              height={320}
              src={assetPathResolver(`/blog/${postData.featImage}`)}
              alt={postData.alt}
            />
          </div>
          <section className="mx-8  pb-4">
            <Breadcrumb>
              <BreadcrumbList className="my-4 text-neutral-900 dark:text-emerald-100 ">
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    <BreadcrumbLink className="hover:text-neutral-400">
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    <BreadcrumbLink className="hover:text-neutral-400">
                      <Link href="/blog">blog</Link>
                    </BreadcrumbLink>
                  </BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{postData.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-2xl py-4  dark:text-emerald-100 ">
              {postData.title}
            </h1>
            <div className=" py-4  flex flex-row flex-wrap gap-4 justify-start">
              <div className=" flex flex-row flex-wrap gap-2">
                {postData.categories.map((c: string) => (
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
                {postData.tags.map((t: string) => (
                  <Link
                    className={badgeVariants({ variant: "secondary" })}
                    key={t}
                    href={`/tag/${t}`}
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>
            <div
              className="mx-4 pb-4  dark:text-emerald-100  "
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
            <Separator className="my-4 mx-auto h-fit w-11/12 bg-slate-100  dark:bg-emerald-100" />
            <BlogAuthor
              author={postData.author}
              authorImage={postData.authorImage}
            />
          </section>
        </article>
      </main>
    </>
  );
}
