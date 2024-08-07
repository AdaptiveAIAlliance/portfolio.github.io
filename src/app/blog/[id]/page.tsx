import ThreeFiberScene from "@/components/threefiber_example";
import { getPostData, getAllPostIds } from "../../../lib/markdownUtils";
import Header from "@/components/header";

export async function generateStaticParams() {
  const paths = getAllPostIds();

  return paths.map((path) => ({
    id: path.params.id,
  }));
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <>
      <ThreeFiberScene />
      <Header />
      <main className="flex text-neutral-900  dark:text-emerald-100 flex-col justify-between sm:px-24 px-8   pt-32">
        <section className="border-slate-100 border-t border-x rounded-t-3xl p-4  rounded-b-none w-full sm:w-full justify-items-start text-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 dark:bg-emerald-900 bg-opacity-60 dark:bg-opacity-40 dark:border-neutral-950">
          <h1>{postData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </section>
      </main>
    </>
  );
}
