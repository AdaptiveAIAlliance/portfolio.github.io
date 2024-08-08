import ThreeFiberScene from "@/components/threefiber_example";
import { getPostData, getAllPostIds } from "../../../lib/markdownUtils";
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
export async function generateStaticParams() {
  const paths = getAllPostIds();

  return paths.map((path) => ({
    id: path.params.id,
  }));
}

type PostData = {
  id: string;
  title: string;
  featImage: string;
  contentHtml: string;
};

export default async function PostPage({ params }: { params: { id: string } }) {
  const postData: PostData = await getPostData(params.id);
  console.log(postData);

  return (
    <>
      <ThreeFiberScene />
      <Header />
      <main className="flex text-neutral-900  dark:text-emerald-100 flex-col justify-between sm:px-24 px-8   pt-32">
        <section className="border-slate-100 border  rounded-3xl overflow-hidden  mb-16 w-full sm:w-full justify-items-start text-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 dark:bg-emerald-900 bg-opacity-60 dark:bg-opacity-40 dark:border-neutral-950">
          <div className="h-52 overflow-hidden">
            <Image
              className="w-full m-auto -translate-y-1/2"
              width={320}
              height={320}
              src={postData.featImage}
              alt="test"
            />{" "}
          </div>
          <h1 className="text-2xl p-4  dark:text-emerald-100 ">
            {postData.title}
          </h1>
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
                <BreadcrumbPage>{postData.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div
            className="px-8 pb-8  dark:text-emerald-100 "
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </section>
      </main>
    </>
  );
}
